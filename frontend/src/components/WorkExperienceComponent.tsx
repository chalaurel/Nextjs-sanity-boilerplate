import React from 'react'
import WorkListComponent from './WorkListComponent'

function WorkExperienceComponent() {
    return (
        <section id='exp' className={'min-h-screen flex-col items-center'}>
            <>
                <h1 className="homeTitle mb-4">Places I’ve worked.</h1>
                <p className='home-description-1 mb-10'>
                    Since 2009, I’ve had the privilege (and occasional panic) of working with several amazing companies that helped me sharpen my skills and talents. Each of them holds a special place in my heart—and possibly a corner of my hard drive. Right now, I’m proud to be part of Capgemini Philippines.
                </p>
                <ol className="relative border-s border-gray-200 dark:border-gray-700 w-3/5">
                    <WorkListComponent
                        date="June 2019"
                        position="Senior Software Engineer"
                        companyName="Collabera"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sapiente eveniet nam illo beatae dolorem error ullam nulla, repudiandae, praesentium neque quod consequatur maxime! Molestias?"
                    />
                    <WorkListComponent
                        date="April 2020"
                        position="Lead Developer"
                        companyName="Tech Solutions"
                        description="Led a team of developers to build scalable solutions for e-commerce clients."
                    />
                    <WorkListComponent
                        date="May 2021"
                        position="Software Architect"
                        companyName="Innovate Inc."
                        description="Architected cloud-native applications, improving scalability and performance."
                    />

                </ol>
            </>
        </section >
    )
}

export default WorkExperienceComponent