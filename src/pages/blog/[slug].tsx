import axios from "axios";
import { GetServerSideProps } from "next"
//@ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
//@ts-ignore
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ParsedUrlQuery } from 'querystring';

import { BsFillPersonFill, BsClockFill } from "react-icons/bs";


interface IParams extends ParsedUrlQuery {
  slug: string
}

export default function Post({ postData, username, slug }: any) {

    return (
        <div className="text-zinc-700 dark:text-zinc-200">
          <div className="px-4 md:px-8">

            <h1 className="pt-8 text-2xl laptop:text-4xl font-semibold text-zinc-600 dark:text-amber-400">{postData.title}</h1>
            <div className="flex gap-x-8">
              <div className="flex gap-x-2 items-center my-2 text-zinc-400">
                <BsFillPersonFill size={16} />
                <span>{username}</span>
              </div>
              <div className="flex gap-x-2 items-center text-zinc-400">
                <BsClockFill size={16} />
                <span>{postData.readable_publish_date}</span>
              </div>
            </div>
          </div>

            <section className="block w-full px-4 md:px-8 py-10 text-base-text gap-y-2">
                <ReactMarkdown
                    children={postData.body_markdown} 
                    className="gap-y-2 prose prose-blue max-w-none blog-content" 
                    components={{
                        code({node, inline, className, children, ...props}) {
                          const match = /language-(\w+)/.exec(className || '')
                          return !inline && match ? (
                            <SyntaxHighlighter
                              children={String(children).replace(/\n$/, '')}
                              style={vscDarkPlus}
                              language={match[1]}
                              PreTag="div"
                              {...props}
                            />
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          )
                        }
                      }}
                />
            </section>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const username = 'guilhermecheng'
    const { slug } = params as IParams;

    const response = await axios.get(`https://dev.to/api/articles/${username}/${slug}`)
    console.log(response)
    let postData = response.data;
    console.log(postData)

    return {
        props: {
            slug,
            username,
            postData
        }
    }
}