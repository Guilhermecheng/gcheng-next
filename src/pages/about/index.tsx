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
            <div className="text-zinc-400 dark:text-white text-base laptop:text-lg w-full flex flex-col laptop:h-screen">
                <PageTitle 
                    title={data.aboutText.title}
                    subtitle={data.aboutText.subtitle}
                />

                <div id="about-content" className="mt-4 laptop:mt-6 text-zinc-500 dark:text-zinc-200 text-sm laptop:text-base">

                    {data.aboutText.content.json.children.map((contentSlice: any, i: number) => {
                        switch(contentSlice.type) {
                            case "heading-four":
                                console.log("é header")
                                return (
                                    <h2 key={i} className="my-4 text-lg laptop:text-xl font-semibold">
                                        {contentSlice.children[0].text}
                                    </h2>
                                )

                            case "bulleted-list":
                                return (
                                    <ul>
                                        {contentSlice.children.map((listItem: any, i: number) => {
                                            return (
                                                <li key={i} className="">
                                                    {listItem.children[0].children[0].text}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )

                            default:
                                return (
                                    <p key={i} className="mt-4">
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
                    aboutText(where: {slug: "guilherme-about-pt-BR"} stage: PUBLISHED){
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