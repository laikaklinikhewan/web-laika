import React, { useState } from 'react'
import Image from 'next/image'
import MainNavbarButton from './MainNavbarButton'

const MainNavbar = () => {
    const SectorList = [
        {text: 'Artikel', sectUrl: '#', iconUrl: '/icons/article.svg', height:"19", width:"18.6"},
        {text: 'Jam Praktek', sectUrl: '#', iconUrl: '/icons/clock.svg',height:"19.7px", width:"19.25px"},
        {text: 'Info Klinik', sectUrl: '#', iconUrl: '/icons/info.svg', height:"17.83", width:"17.41",},
        {text: 'Home', sectUrl: '#', iconUrl:'/icons/home.svg',height:"24.02px", width:"23.47px"}
    ];
    
    const [activeSect, setActiveSect] = useState(3);
    return (
        <div className='flex justify-between h-40 max-w-8xl w-screen shadow-lg text-base inline-flex'>
            <div className="w-logo h-logo mx-xnav my-ynav self-center">
                <Image src="/assets/LOGO.png" alt="Laika" width="100px" height="100px" layout="fixed"/>
            </div>
            <div className='grid md:mr-xnav mr-xnavmin'>
                <nav className='flex space-x-10 text-tn md:text-sm text-media items-center'>
                    <a className='flex self-center' href="https://www.instagram.com/laikaklinikhewan/"><div className="md:p-1 p-0.5 h-igt w-igt md:h-ig md:w-ig"><Image src="/icons/instagram-head.svg" alt="" width="23px" height="23px"/></div>laikaklinikhewan</a>
                    <a className='flex self-center' href="https://bit.ly/asklaikaklinikhewan"><div className="md:p-1 p-0.5 h-igt w-igt md:h-ig md:w-ig"><Image src="/icons/whatsapp-head.svg" alt="" width="23px" height="23px"/></div>bit.ly/asklaikaklinikhewan</a>
                    <a className='flex self-center' href="https://mail.google.com/mail/u/0/?fs=1&to=laikaklinikhewan@gmail.com&tf=cm"><div className="md:h-mail md:w-mail h-mailt w-mailt"><Image src="/icons/mail-head.svg" alt="" width="20px" height="20px"/></div>laikaklinikhewan@gmail.com</a>
                </nav>
                <nav className="flex flex-row-reverse space-x-10 space-x-reverse mt-ynav items-center md:text-base text-sm">
                    {console.log(activeSect)}
                    {SectorList.map((sect, index) => (    
                        <MainNavbarButton 
                            key={index} 
                            text={sect.text} 
                            sectUrl={sect.sectUrl} 
                            iconUrl={sect.iconUrl} 
                            isActive={activeSect === index} 
                            onClickFunc={() => setActiveSect(index)} 
                            height={sect.height} 
                            width={sect.width} 
                        />
                    ))}
                </nav>
            </div>   
        </div>
    )
}

export default MainNavbar
