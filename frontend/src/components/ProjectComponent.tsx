
import React from 'react'
import ProjectListComponent from './ProjectListComponent'

function ProjectComponent() {
    return (
        <section id='work' className={'min-h-screen flex-col items-center'}>
            <h1 className="homeTitle mb-4">Some of my works.</h1>
            <p className='home-description-1 mb-10'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta error exercitationem ipsam. Officiis, quidem est corrupti, quam enim ad sunt corporis unde ab eligendi iusto?
            </p>

            <ProjectListComponent
                name='Sample'
                stack='Next.js, CSS, Python'
                description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta error '
                url='#'
                image='https://picsum.photos/200'
                isRight={true}
            />
            <ProjectListComponent
                name='Sample'
                stack='Next.js, CSS, Python'
                description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta error '
                url='#'
                image='https://picsum.photos/200'
                isRight={false}
            />

        </section>
    )
}

export default ProjectComponent