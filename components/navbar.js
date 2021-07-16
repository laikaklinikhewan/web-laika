import React from 'react'

class Navbar extends React.Component {
    render(){
        return (
            <>
                <div className='flex justify-between h-nav max-w-8xl w-screen shadow-lg text-base inline-flex'>
                    <img src="/assets/LOGO.png" alt="Laika" className="w-logo h-logo mx-xnav my-ynav self-center"/>
                    <div className='grid md:mr-xnav mr-xnavmin'>
                        <nav className='flex space-x-10 text-tn md:text-sm text-media items-center'>
                            <a className='flex self-center' href="https://www.instagram.com/laikaklinikhewan/"><img className="md:p-1 p-0.5 h-igt w-igt md:h-ig md:w-ig" src="/icons/instagram-head.svg"/>laikaklinikhewan</a>
                            <a className='flex self-center' href="https://bit.ly/asklaikaklinikhewan"><img className="md:p-1 p-0.5 h-igt w-igt md:h-ig md:w-ig" src="/icons/whatsapp-head.svg"/>bit.ly/asklaikaklinikhewan</a>
                            <a className='flex self-center' href="https://mail.google.com/mail/u/0/?fs=1&to=laikaklinikhewan@gmail.com&tf=cm"><img className="md:h-mail md:w-mail h-mailt w-mailt" src="/icons/mail-head.svg"/>laikaklinikhewan@gmail.com</a>
                        </nav>
                        <nav className="flex flex-row-reverse space-x-10 space-x-reverse mt-ynav font-light items-center md:text-base text-sm">
                            <a className='flex self-center' href=""><img className='p-1 md:h-home md:w-home' src="/icons/article.svg" alt="" />Artikel</a>
                            <a className='flex self-center' href=""><img className='p-1' src="/icons/clock.svg" alt="" />Jam Praktek</a>
                            <a className='flex self-center' href=""><img className='p-1' src="/icons/info.svg" alt="" />Info Klinik</a>
                            <a className='flex self-center' href=""><img className='' src="/icons/home.svg" alt="" />Home</a>
                        </nav>
                    </div>   
                </div>
            </>
        )
    }
}

export default Navbar