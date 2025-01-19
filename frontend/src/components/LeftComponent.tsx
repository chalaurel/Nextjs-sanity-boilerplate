'use client';
import { useEffect } from 'react'
import Button from './Button'
import AOS from 'aos';
import 'aos/dist/aos.css';

function LeftComponent() {
    useEffect(() => {
        AOS.init({ duration: 500, ease: 'ease' })
    }, []);

    return (
        <aside className="w-144 p-10 sticky">
            <h4 className='-mb-10 firstname' data-aos="fade-right"> CHA</h4>
            <h1 className="mt-1 lastname" data-aos="fade-up">LAUREL</h1>
            <h4 className='-mt-5 title' data-aos="fade-down">Software Engineer</h4>
            <p className='w-4/5 mb-5' data-aos="fade-up">
                “As a versatile Software Engineer, I thrive on adapting to new technologies and evolving environments. I focus on learning one skill at a time, delivering innovative solutions while embracing change with a growth mindset.”
            </p>

            <div data-aos="fade-left" >
                <Button type="primary" size="md" label="Get in Touch!" />
            </div>
        </aside>

    )
}

export default LeftComponent