import React from 'react'

export default function HeaderComponent() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-2">
                <h1 className="text-xl font-bold">Fixed Header</h1>
            </div>
        </header>
    )
}
