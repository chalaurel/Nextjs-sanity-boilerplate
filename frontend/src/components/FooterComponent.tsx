import React from 'react'

function FooterComponent() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex flex-col justify-center items-center text-center">
            <p>Keep Calm and Push to Production on Friday!</p>
            <h3>“All rights reserved &copy; {currentYear}. some wrongs ignored.”</h3>
        </footer>
    )
}

export default FooterComponent