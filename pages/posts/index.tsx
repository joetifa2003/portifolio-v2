import Header from "components/UI/Header";
import { GetStaticProps } from "next";
import Image from "next/image";
import api from "util/api";

export const getStaticProps: GetStaticProps = async () => {
    const { data: posts } = await api.get("/posts?populate=*");

    return {
        props: {
            posts: posts.data,
        },
        revalidate: 60,
    };
};

const Posts = ({ posts }: any) => {
    return (
        <div className="container pt-24">
            <Header>Welcome to my blog</Header>
            <div className="grid grid-cols-4">
                {posts.map((post: any, i: any) => (
                    <PostCard key={i} post={post} />
                ))}
            </div>
        </div>
    );
};

const PostCard = ({ post }: any) => {
    const imageUrl = post.attributes.image.data?.attributes.url;
    return (
        <a className="p-4 duration-500 transform shadow-xl cursor-pointer bg-lightGray rounded-xl hover:scale-105">
            {imageUrl && (
                <Image
                    src={imageUrl}
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
    );
};

export default Posts;
