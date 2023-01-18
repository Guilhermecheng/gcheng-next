import client from "@/services/apolloClient";
import { gql } from "@apollo/client";
import Head from "next/head";

export default function About({data}: any) {
    console.log(data)
    return (
        <>
            <Head>
                <title>About | Guilherme Cheng</title>
            </Head>
            <div className="text-zinc-400 dark:text-zinc-200 w-full flex flex-col pt-4 laptop:pt-12 laptop:h-screen laptop:px-12">
                <h1 className="font-semibold text-zinc-800 dark:text-white text-2xl laptop:text-4xl">Guilherme Cheng</h1>

                <p>Yeah, this is kinda my resumé =)</p>
                {/* <p>{data.webText.subtitle}</p> */}

                <div id="about-content" className="mt-4 text-zinc-500 dark:text-zinc-300">
                    <p className="font-semibold">{data.webText.title}</p>

                    {data.webText.content.json.children.map((contentSlice: any, i: number) => {
                        switch(contentSlice) {
                            case contentSlice.type === "paragraph":
                                return (
                                    <p key={i} className="mt-2">
                                        {contentSlice.children[0].text}
                                    </p>
                                )
                                
                            case contentSlice.type === "image":
                                break;
                            default:
                                return (
                                    <p key={i} className="mt-2">
                                        {contentSlice.children[0].text}
                                    </p>
                                )

                        }
                        })}
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    try {
        const {data} = await client.query({
            query: gql `
                query MyQuery {
                    webText(where: {slug: "guilherme-intro"}) {
                    id
                    createdAt
                    title
                    subtitle
                    updatedAt
                    slug
                    content {
                        json
                    }
                    }
                }`
        })
    
        console.log(data)
        return {
            props: {
                data,
            }
        }
    } catch(error) {
        console.log(error)
        return {
            props: {
                data: null,
            }
        }
    }
}