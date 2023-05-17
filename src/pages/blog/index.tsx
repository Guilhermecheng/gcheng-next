import { PageTitle } from "@/components/PageTitle";
import axios from "axios";
import Head from "next/head";

export default function Blog(props: any) {
    return (
        <>
        {/* <div className="text-zinc-800 dark:text-zinc-100 flex items-center justify-center h-screen">Under construction</div> */}
        <Head>
            <title>{`Blog | Guilherme Cheng`}</title>
        </Head>

        <PageTitle
            title={`Blog`}
            subtitle={`My space to share ideas and thoughts to the world!`}
        />

        <section className='w-full mt-10'>
            <div className='flex w-full text-zinc-700 dark:text-white bg-zinc-200 hover:bg-zinc-400 dark:bg-zinc-900 dark:hover:bg-zinc-700 px-4 py-2 mb-4 rounded-md cursor-pointer'>
                <div className="flex-col">
                    <h1 className="text-zinc-900 dark:text-amber-400 font-semibold text-xl">Post title</h1>
                    <p>post subtitle</p>
                    <span className="text-zinc-500">created at: </span>
                    <span>tags:</span>                    <span>{props.username}</span>
                </div>

            </div>
            <div className='flex w-full text-zinc-700 dark:text-white bg-zinc-200 hover:bg-zinc-400 dark:bg-zinc-900 dark:hover:bg-zinc-700 px-4 py-2 mb-4 rounded-md cursor-pointer'>
                <div className="flex-col">
                    <h1 className="text-zinc-900 dark:text-amber-400 font-semibold text-xl">Post title</h1>
                    <p>post subtitle</p>
                    <span className="text-zinc-500">created at: </span>
                    <span>tags:</span>                    <span>{props.username}</span>
                </div>
            </div>

            {props.blogPosts.map((post: any, i: number) => {
                return (
                    <div key={i} className='flex w-full text-zinc-700 dark:text-white bg-zinc-200 hover:bg-zinc-400 dark:bg-zinc-900 dark:hover:bg-zinc-700 px-4 py-2 mb-4 rounded-md cursor-pointer'>
                        <div className="flex-col">
                            <h1 className="text-zinc-900 dark:text-amber-400 font-semibold text-xl">{post.title}</h1>
                            <p>{post.description}</p>
                            <span className="text-zinc-500">created at: </span>
                            <span>tags:</span>                    <span>{props.username}</span>
                        </div>
                    </div>
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