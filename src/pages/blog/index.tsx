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

            <section className='w-full mt-10 laptop:grid laptop:grid-cols-2 laptop:gap-4'>
                {props.blogPosts.map((post: Article, i: number) => {
                    return (
                        <Link key={i} href={`/blog/${post.slug}`} className='group flex flex-col w-full text-zinc-700 dark:text-white bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-900 dark:hover:bg-zinc-700 mb-4 rounded-md cursor-pointer'>
                            { post.cover_image && (
                                    <div className="h-40 overflow-hidden rounded-t-md group-hover:opacity-60">
                                        <img 
                                            src={post.cover_image} 
                                            alt={post.title} 
                                        />
                                    </div>
                            ) }
                            
                            <div className="flex flex-col gap-y-4 px-6 py-4 h-full max-h-72">
                                <h1 className="text-zinc-700 dark:text-amber-400 font-semibold text-xl ">{post.title}</h1>
                                
                                <p className="">{post.description}</p>

                                <div className="h-full justify-end flex flex-col text-xs gap-y-1 tablet:text-base text-zinc-500 dark:text-zinc-400">
                                    <div className="flex items-center gap-x-2 mr-6 ">
                                        <BsFillPersonFill size={16} className="text-zinc-700 dark:text-amber-400" />
                                        <span>{props.username}</span>
                                    </div>
                                    <div className="flex items-center gap-x-2 mr-6 ">
                                        <BsCalendar3 size={16} className="text-zinc-700 dark:text-amber-400" />
                                        <span className="">{post.readable_publish_date}</span>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <BsClockFill size={16} className="text-zinc-700 dark:text-amber-400" />
                                        <span>{post.reading_time_minutes} minutes</span>
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