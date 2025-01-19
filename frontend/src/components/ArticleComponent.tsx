import React from 'react'
import ArticleListComponent from './ArticleListComponent'

function ArticleComponent() {
    return (
        <section id='article' className={'min-h-screen flex-col items-center'}>
            <h1 className="homeTitle mb-4 flex flex-col">The Art of Breaking <div className={'pl-20'}>(and Fixing) Code</div> </h1>
            <p className='home-description-1 mb-10'>
                “A collection of my thoughts and stories, from tackling tech challenges to sharing fun and lighthearted moments. Whether it’s about coding or celebrating life’s little wins, these articles reflect my journey and passions.”
            </p>

            <div className={'flex flex-row justify-between'}>
                <ArticleListComponent
                    title=' Lorem ipsum dolor sit amet.'
                    tags={['one', 'two']}
                    date={new Date()}
                    summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quas excepturi. Molestiae provident, pariatur harum aspernatur laborum tempora magni praesentium.'
                />

                <ArticleListComponent
                    title=' Lorem ipsum dolor sit amet.'
                    tags={['one', 'two']}
                    date={new Date()}
                    summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quas excepturi. Molestiae provident, pariatur harum aspernatur laborum tempora magni praesentium.'
                />
            </div>
        </section>
    )
}

export default ArticleComponent