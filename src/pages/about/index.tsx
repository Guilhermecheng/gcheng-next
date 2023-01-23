import Head from "next/head";

import client from "@/services/apolloClient";
import { gql } from "@apollo/client";

import { PageTitle } from "@/components/PageTitle";
import { useContext } from "react";
import { GlobalContext } from "@/contexts/Contexts";

export default function About({data}: any) {
    console.log(data)
    const { language } = useContext(GlobalContext);

    return (
        <>
            <Head>
                <title>About | Guilherme Cheng</title>
            </Head>
            <div className="text-zinc-400 dark:text-white text-base laptop:text-lg w-full flex flex-col pt-4 laptop:pt-12 laptop:h-screen">
                <PageTitle 
                    title={data.webText.title}
                    subtitle={data.webText.subtitle}
                />

                <div id="about-content" className="mt-6 laptop:mt-8 text-zinc-500 dark:text-zinc-200">

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
                query QueryAboutMePTBR {
                    webText(where: {slug: "guilherme-about-pt-BR"} stage: PUBLISHED){
                        createdAt
                        id
                        publishedAt
                        slug
                        subtitle
                        title
                        updatedAt
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