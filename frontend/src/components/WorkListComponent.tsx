import React from 'react'

import { WorkListProps } from '@/interfaces/WorkList.d'

const WorkListComponent: React.FC<WorkListProps> = ({ date, position, companyName, description }) => {
    return (
        <li className='ms-4'>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {date}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {position} at {companyName}
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {description}
            </p>
        </li>
    );
};

export default WorkListComponent;