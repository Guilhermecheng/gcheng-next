import { PageTitle } from "@/components/PageTitle";
import axios from "axios";
import Head from "next/head";
import { BsFillPersonFill, BsClockFill, BsCalendar3 } from "react-icons/bs";
import Link from "next/link";

interface Article {
    type_of: string;
    id: number;
    title: string;
    description: string;
    readable_publish_date: string;
    slug: string;
    path: string;
    url: string;
    comments_count: number;
    public_reactions_count: number;
    collection_id: null | number;
    published_timestamp: string;
    positive_reactions_count: number;
    cover_image: string | null;
    social_image: string;
    canonical_url: string;
    created_at: string;
    edited_at: string | null;
    crossposted_at: string | null;
    published_at: string;
    last_comment_at: string;
    reading_time_minutes: number;
    tag_list: string[];
    tags: string;
    body_html: string;
    body_markdown: string;
    user: {
        name: string;
        username: string;
        twitter_username: string | null;
        github_username: string;
        user_id: number;
        website_url: string | null;
        profile_image: string;
        profile_image_90: string;
    };
}

interface BlogProps {
    username: string;
    blogPosts: Article[]
}

export default function Blog(props: BlogProps) {
    return (
        <>
            <Head>
                <title>{`Blog | Guilherme Cheng`}</title>
            </Head>

            <PageTitle
                title={`Blog`}
            />

            <section className='w-full mt-10'>
                {props.blogPosts.map((post: Article, i: number) => {
                    return (
                        <Link key={i} href={`/blog/${post.slug}`} className='group flex flex-col w-full text-zinc-700 dark:text-white bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-900 dark:hover:bg-zinc-700 mb-4 rounded-md cursor-pointer'>
                            { post.cover_image && (
                                    <div className="h-20 overflow-hidden rounded-t-md group-hover:opacity-60">
                                        <img src={post.cover_image}  />
                                    </div>
                            ) }
                            
                            <div className="flex-col px-6 py-4">
                                <h1 className="text-zinc-700 dark:text-amber-400 font-semibold text-xl mb-4">{post.title}</h1>
                                <p className="mb-2">{post.description}</p>

                                <div className="flex text-zinc-500 dark:text-zinc-400">
                                    <div className="flex items-center gap-x-2 mr-6 ">
                                        <BsFillPersonFill size={16} className="text-zinc-700 dark:text-amber-400" />
                                        <span>{props.username}</span>
                                    </div>
                                    <div className="flex items-center gap-x-2 mr-6 ">
                                        <BsCalendar3 size={16} className="text-zinc-700 dark:text-amber-400" />
                                        <span className="">created at: {post.readable_publish_date}</span>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <BsClockFill size={16} className="text-zinc-700 dark:text-amber-400" />
                                        <span>Reading time:  {post.reading_time_minutes} minutes</span>
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

export async function getStaticProps() {
    const username = 'guilhermecheng'
    let response = await axios.get(`https://dev.to/api/articles?username=${username}`)

    let blogPosts = response.data;
    return {
        props: {
            username,
            blogPosts
        }
    }
}