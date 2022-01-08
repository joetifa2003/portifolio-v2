import Header from "components/UI/Header";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import "prism-themes/themes/prism-one-dark.css";
import qs from "qs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import prism from "remark-prism";
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
        filters: {
            slug: {
                $eq: params?.slug,
            },
        },
        populate: "*",
    });

    const { data: posts } = await api.get(`/posts?${query}`);

    const post = posts?.data[0]?.attributes;
    if (!post) {
        return { notFound: true };
    }

    post.content = await serialize(post.content, {
        mdxOptions: {
            remarkPlugins: [
                [
                    prism,
                    {
                        transformInlineCode: true,
                    },
                ],
            ],
        },
    });

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
        revalidate: 10,
    };
};

const Post = ({ post }: { post: any }) => {
    return (
        <div className="page">
            <NextSeo
                title={`${post.title} | YA`}
                description={post.description || ""}
                openGraph={{
                    images: [
                        {
                            url: post.image.data?.attributes?.url as any,
                            width: 800,
                            height: 600,
                        },
                    ],
                }}
                twitter={{
                    handle: "@handle",
                    site: "@site",
                    cardType: "summary_large_image",
                }}
            />
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
                <article className="prose-sm prose sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl prose-invert max-w-none prose-h1:font-mono prose-h2:font-mono prose-code:font-mono prose-img:!m-0">
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
                            p: (props: any) => <p dir="auto" {...props} />,
                        }}
                    />
                </article>
            </div>
        </div>
    );
};

export default Post;
