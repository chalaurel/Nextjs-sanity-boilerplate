import React from 'react'
import IntroComponent from './IntroComponent'
import WorkExperienceComponent from './WorkExperienceComponent'
import WorkComponent from './ProjectComponent'
import ArticleComponent from './ArticleComponent'

function BodyComponent() {
    return (
        <section className=''>
            <IntroComponent />
            <WorkExperienceComponent />
            <WorkComponent />
            <ArticleComponent />
        </section>
    )
}

export default BodyComponent