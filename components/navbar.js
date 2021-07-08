import React from 'react'

class Navbar extends React.Component {
    render(){
        return (
            <>
                <div className='flex justify-between h-nav w-screen shadow-lg text-base'>
                    <img src="/assets/LOGO.png" alt="Laika" className="w-logo h-logo mx-xnav my-ynav"/>
                    <div className='grid mx-xnav mt-ynav'>
                        <nav className='flex space-x-10 text-sm text-media'>
                            <a href="">laikaklinikhewan</a>
                            <a href="">bit.ly/asklaikaklinikhewan</a>
                            <a href="">laikaklinikhewan@gmail.com</a>
                        </nav>
                        <nav className="flex flex-row-reverse space-x-10 space-x-reverse mt-ynav font-light">
                            <a className='flex self-center' href=""><img className='p-1' src="/icons/article.svg" alt="" />Artikel</a>
                            <a className='flex self-center' href=""><img className='p-1' src="/icons/clock.svg" alt="" />Jam Praktek</a>
                            <a className='flex self-center' href=""><img className='p-1 h-info' src="/icons/info.svg" alt="" />Info Klinik</a>
                            <a className='flex self-center' href=""><img className='p-1 h-home' src="/icons/home.svg" alt="" />Home</a>
                        </nav>
                    </div>   
                </div>
            </>
        )
    }
}

export default Navbar