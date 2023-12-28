import axios from "axios";
import { GetServerSideProps } from "next"
//@ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
//@ts-ignore
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ParsedUrlQuery } from 'querystring';

import { BsFillPersonFill, BsCalendar3 } from "react-icons/bs";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";



interface IParams extends ParsedUrlQuery {
  slug: string
}

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

interface PostProps {
  username: string;
  postData: Article;
}

export default function Post({ postData, username }: PostProps) {

    return (
        <div className="text-zinc-700 dark:text-zinc-200 flex flex-col items-center">
          <div className="pt-2 tablet:pt-4 w-full max-w-[900px]">

          
            <Link href={`/blog`} className="flex items-center gap-x-1 text-sm tablet:text-base text-zinc-600 hover:text-amber-400 dark:text-amber-400 dark:hover:text-white">
              <MdArrowBack size={16} />
              <span>Back</span>
            </Link>

            <div className="px-2 tablet:px-8 pt-2 tablet:pt-4 pb-2 after:content-[''] after:block after:w-full after:h-[2px] after:bg-amber-400 after:mt-4 dark:after:bg-zinc-700">

              <h1 className="text-2xl laptop:text-4xl font-bold text-zinc-800 dark:text-amber-400">{postData.title}</h1>
              <div className="flex gap-x-8 text-sm tablet:text-base">
                <div className="flex gap-x-2 items-center my-2 text-zinc-500 dark:text-zinc-400">
                  <BsFillPersonFill size={16} className="text-zinc-700 dark:text-amber-400" />
                  <span>{username}</span>
                </div>
                <div className="flex gap-x-2 items-center text-zinc-500 dark:text-zinc-400">
                  <BsCalendar3 size={16} className="text-zinc-700 dark:text-amber-400" />
                  <span>{postData.readable_publish_date}</span>
                </div>
              </div>
            </div>

              <section className="block w-full px-4 tablet:px-8 py-10 text-base-text gap-y-2">
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
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const username = 'guilhermecheng'
    const { slug } = params as IParams;

    const response = await axios.get(`https://dev.to/api/articles/${username}/${slug}`)
    let postData = response.data;

    return {
        props: {
            slug,
            username,
            postData
        }
    }
}