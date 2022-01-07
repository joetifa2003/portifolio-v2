import Header from "components/UI/Header";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import qs from "qs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import api from "util/api";

export const getStaticPaths: GetStaticPaths = async () => {
    const query = qs.stringify({
        fields: ["slug"],
    });

    const { data: posts } = await api.get(`/posts?${query}`);

    const paths = posts.data.map((post: any) => ({
        params: { slug: post.attributes.slug },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = qs.stringify({
        filter: {
            slug: {
                $eq: params?.slug,
            },
        },
        populate: "*",
    });

    const { data: posts } = await api.get(`/posts?${query}`);

    const post = posts.data[0].attributes;
    post.content = await serialize(post.content);

    const imageUrl = post.image.data?.attributes.url;

    if (imageUrl) {
        const { base64, img } = await getPlaiceholder(imageUrl, {
            size: 64,
        });

        post.imageProps = {
            ...img,
            blurDataURL: base64,
            placeholder: "blur",
        };
    }

    return {
        props: {
            post,
        },
        revalidate: 60,
    };
};

const Post = ({ post }: { post: any }) => {
    return (
        <div className="page">
            <div className="container">
                {post.imageProps && (
                    <Image
                        {...post.imageProps}
                        width={1920}
                        height={1080}
                        objectFit="cover"
                        alt=""
                    />
                )}
                <Header>{post.title}</Header>
                <div className="prose-sm lg:prose-lg prose-invert">
                    <MDXRemote
                        {...post.content}
                        components={{
                            img: (image: any) => (
                                <LazyLoadImage
                                    src={image.src as string}
                                    alt={image.alt}
                                    effect="blur"
                                />
                            ),
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Post;
