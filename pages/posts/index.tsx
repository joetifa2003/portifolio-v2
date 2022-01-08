import Header from "components/UI/Header";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { getPlaiceholder } from "plaiceholder";
import api from "util/api";

export const getStaticProps: GetStaticProps = async () => {
    const { data: posts } = await api.get("/posts?populate=*");

    for (const post of posts.data) {
        const imageUrl = post.attributes.image.data?.attributes.url;

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
    }

    return {
        props: {
            posts: posts.data,
        },
        revalidate: 60,
    };
};

const Posts = ({ posts }: any) => {
    return (
        <div className="container page">
            <NextSeo
                title="Youssef Ahmed | Personal Blog"
                description="Youssef Ahmed's personal blog."
                openGraph={{
                    images: [{ url: "/SocialImage.png" }],
                }}
                twitter={{
                    cardType: "summary_large_image",
                }}
            />
            <Header>Welcome to my blog</Header>
            <div className="grid lg:grid-cols-4 md:grid-cols-2">
                {posts.map((post: any, i: any) => (
                    <PostCard key={i} post={post} />
                ))}
            </div>
        </div>
    );
};

const PostCard = ({ post }: any) => {
    return (
        <Link href={`/posts/${post.attributes.slug}`}>
            <a className="p-4 duration-500 transform shadow-md cursor-pointer bg-lightGray rounded-xl hover:scale-105">
                {post.imageProps && (
                    <Image
                        {...post.imageProps}
                        width={1920}
                        height={1080}
                        objectFit="cover"
                        alt=""
                    />
                )}
                <p className="text-2xl">{post.attributes.title}</p>

                <div className="mt-8">
                    <div className="flex -m-2">
                        {post.attributes.tags.data?.map((tag: any) => (
                            <div className="p-2" key={tag.attributes.name}>
                                <div className="px-2 py-1 border-2 rounded-md bg-gray border-cyan">
                                    <span className="text-cyan">#</span>{" "}
                                    <span>{tag.attributes.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default Posts;
