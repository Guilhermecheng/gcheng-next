import { PageTitle } from "@/components/PageTitle";
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
            <div className="text-zinc-400 dark:text-zinc-300 text-base laptop:text-lg w-full flex flex-col pt-4 laptop:pt-12 laptop:h-screen">
                <PageTitle 
                    title={`Guilherme Cheng`}
                    subtitle={`Yeah, this is kinda my resumé =)`}
                />

                <div id="about-content" className="mt-6 laptop:mt-8 text-zinc-500 dark:text-zinc-300">
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