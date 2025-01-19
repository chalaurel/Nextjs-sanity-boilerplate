import { ArticleListProps } from '@/interfaces/ArticleList.d'
import Link from 'next/link'
import React from 'react'

const ArticleListComponent: React.FC<ArticleListProps> = ({ title, tags, date, summary }) => {

    return (
        <Link
            href='#'
            className={'p-5 m-5 card rounded-3xl relative group hover:shadow-lg hover:bg-secondary-hover hover:bg-opacity-25:25% transition duration-300 ease-in-out'}
        >
            <h4 className={'mb-3'}>{title}</h4>
            <hr />
            <div className={'py-2 flex flex-row justify-between mb-5'}>
                <div className="flex [&>*:not(:last-child)]:after:content-[',\00a0']">
                    {[...tags].map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </div>
                <div>{date.toDateString()}</div>
            </div>
            <p className={'text-justify mb-5'}>
                {summary}
            </p>
            <div className={`right-0 hidden absolute bottom-0 p-4 rounded hover:bg-transparent group-hover:block`}>
                Click to View the Article.
            </div>
        </Link>
    )
}

export default ArticleListComponent