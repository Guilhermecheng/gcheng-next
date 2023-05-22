import { PageTitle } from "@/components/PageTitle";
import axios from "axios";
import Head from "next/head";
import { BsFillPersonFill, BsClockFill } from "react-icons/bs";
import { AiFillTags } from "react-icons/ai";
import Link from "next/link";

interface BlogProps {
    username: string;
    blogPosts: {
        type_of: string;
        id: number;
        title: string;
        description: string;
        readable_publish_date: string;
        slug: string;
        path:string;
        url: string;
        comments_count: number;
        public_reactions_count: number;
        collection_id: string,
        published_timestamp: string;
        positive_reactions_count: number;
        cover_image: string,
        social_image: string;
        canonical_url: string;
        created_at: string;
        edited_at: string,
        crossposted_at: string,
        published_at: string;
        last_comment_at: string;
        reading_time_minutes: number;
    }[]
}

export default function Blog(props: BlogProps) {
    return (
        <>
            <Head>
                <title>{`Blog | Guilherme Cheng`}</title>
            </Head>

            <PageTitle
                title={`Blog`}
                // subtitle={`My space to share ideas and thoughts to the world!`}
            />

            <section className='w-full mt-10'>
                {props.blogPosts.map((post: any, i: number) => {
                    return (
                        <Link key={i} href={`/blog/${post.slug}`} className='group flex flex-col w-full text-zinc-700 dark:text-white bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-900 dark:hover:bg-zinc-700 mb-4 rounded-md cursor-pointer'>
                            { post.cover_image && (
                                    <div className="h-20 overflow-hidden rounded-t-md group-hover:opacity-60">
                                        <img src={post.cover_image}  />
                                    </div>
                            ) }
                            
                            <div className="flex-col px-6 py-4">
                                <h1 className="text-zinc-900 dark:text-amber-400 font-semibold text-xl mb-4">{post.title}</h1>
                                <p className="mb-2">{post.description}</p>

                                <div className="flex text-zinc-600 dark:text-zinc-400">
                                    <div className="flex items-center gap-x-2 mr-6 ">
                                        <BsFillPersonFill size={16} />
                                        <span>{props.username}</span>
                                    </div>
                                    <div className="flex items-center gap-x-2 mr-6 ">
                                        <BsClockFill size={16} />
                                        <span className="">created at: </span>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <AiFillTags size={16} />
                                        <span>tags:</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </section>
        </>
    )
}

export async function getStaticProps({ params }: any) {
    const username = 'guilhermecheng'
    let response = await axios.get(`https://dev.to/api/articles?username=${username}`)
    console.log(response)

    let blogPosts = response.data;
    return {
        props: {
            username,
            blogPosts
        }
    }
}