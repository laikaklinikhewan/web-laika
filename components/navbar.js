import React from 'react'

class Navbar extends React.Component {
    render(){
        return (
            <>
                <div className='flex justify-between h-nav w-screen shadow-lg text-base overflow-x-auto'>
                    <img src="/assets/LOGO.png" alt="Laika" className="w-logo h-logo mx-xnav my-ynav self-center"/>
                    <div className='grid mx-xnav'>
                        <nav className='flex space-x-10 text-sm text-media items-center'>
                            <a className='flex self-center' href=""><img className="p-1 h-ig w-ig" src="/icons/instagram-head.svg"/>laikaklinikhewan</a>
                            <a className='flex self-center' href=""><img className="p-1 h-ig w-ig" src="/icons/whatsapp-head.svg"/>bit.ly/asklaikaklinikhewan</a>
                            <a className='flex self-center' href=""><img className="h-mail w-mail" src="/icons/mail-head.svg"/>laikaklinikhewan@gmail.com</a>
                        </nav>
                        <nav className="flex flex-row-reverse space-x-10 space-x-reverse mt-ynav font-light items-center">
                            <a className='flex self-center' href=""><img className='p-1' src="/icons/article.svg" alt="" />Artikel</a>
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