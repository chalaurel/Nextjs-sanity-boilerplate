"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { ProjectListProps } from '@/interfaces/ProjectList.d'

const ProjectListComponent: React.FC<ProjectListProps> = ({ name, stack, description, image, url, isRight }) => {
    return (
        <Link
            href={url}
            className={`flex ${isRight ? 'flex-row-reverse' : 'flex-row'} items-center card rounded-3xl md:max-w-2xl mb-4 overflow-hidden`}
        >
            <div className={'flex flex-col justify-between p-4 leading-normal relative group'}>
                <div className={'flex flex-row justify-start align-bottom'}>
                    <div className={'mr-3'}> # 1</div>
                    <h5 className={'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'}>
                        {name}
                    </h5>
                </div>
                <div className={'flex flex-row justify-start align-bottom text-xs mb-2'}>
                    <b className={'mr-2 font-bold'}>Tech Stack: </b>
                    {stack}
                </div>
                <p className={'mb-3 font-normal text-gray-700 dark:text-gray-400'}>
                    {description}
                </p>
                <div className={`${isRight ? 'left-0' : 'right-0'} hidden absolute -bottom-10 p-4 rounded hover:bg-transparent group-hover:block`}>
                    Click to View Project Details.
                </div>
            </div>
            <Image
                className={'object-cover w-2/5 rounded-3xl hover:scale-110 transition duration-300'}
                src={image}
                alt="Noteworthy technology acquisitions 2021"
                width={150}
                height={50}
            />



        </Link >
    );
};

export default ProjectListComponent;