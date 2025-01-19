import React from 'react'
import Image from 'next/image'

function IntroComponent() {
    return (
        <section id='intro' className={'min-h-screen flex items-center'}>
            <div>
                <h1 className="homeTitle mb-4">What do I do?</h1>
                <p className='home-description-1 mb-10'>
                    I’ve been coding professionally for more than a decade and a half now that focus on front end integration, architecture, APIs and other business logics.
                </p>
                <p className='home-description-2 mb-10'>
                    Here’s my tech stack (survival stash)!
                </p>
                <Image
                    src="/images/tech-stash.svg"
                    alt="Example Image"
                    width={500}
                    height={0}
                    style={{ height: 'auto' }}
                />
            </div>
        </section>
    )
}

export default IntroComponent