import React from 'react'
import PinkNavbar from './PinkNavbar'
import Image from 'next/image'
import Footer from './Footer'

const Staff = () => {
    const staffList = [
        {photoUrl: '/assets/doc.png', name:'Dr.Eren Jaeger', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dignissim magna. Aliquam sed neque sollicitudin, euismod magna in, congue est. Sed in molestie risus, eget lobortis neque. Ut molestie nunc libero, sit amet malesuada sapien sagittis ornare. Sed vitae arcu velit. Quisque sit amet orci ultrices, blandit elit quis, mattis quam. Vivamus id sodales tellus, in placerat nunc. Etiam tristique rhoncus libero, et ullamcorper lacus posuere nec. Quisque nulla mi, maximus a tincidunt nec, facilisis vel ante. Donec ante lacus, ornare id massa egestas, venenatis sagittis mi. Donec aliquam vulputate arcu, ac tempus dolor interdum at. '},
        {photoUrl: '/assets/doc.png', name:'Dr.Eren Jaeger', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dignissim magna. Aliquam sed neque sollicitudin, euismod magna in, congue est. Sed in molestie risus, eget lobortis neque. Ut molestie nunc libero, sit amet malesuada sapien sagittis ornare. Sed vitae arcu velit. Quisque sit amet orci ultrices, blandit elit quis, mattis quam. Vivamus id sodales tellus, in placerat nunc. Etiam tristique rhoncus libero, et ullamcorper lacus posuere nec. Quisque nulla mi, maximus a tincidunt nec, facilisis vel ante. Donec ante lacus, ornare id massa egestas, venenatis sagittis mi. Donec aliquam vulputate arcu, ac tempus dolor interdum at. '},
        {photoUrl: '/assets/doc.png', name:'Dr.Eren Jaeger', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dignissim magna. Aliquam sed neque sollicitudin, euismod magna in, congue est. Sed in molestie risus, eget lobortis neque. Ut molestie nunc libero, sit amet malesuada sapien sagittis ornare. Sed vitae arcu velit. Quisque sit amet orci ultrices, blandit elit quis, mattis quam. Vivamus id sodales tellus, in placerat nunc. Etiam tristique rhoncus libero, et ullamcorper lacus posuere nec. Quisque nulla mi, maximus a tincidunt nec, facilisis vel ante. Donec ante lacus, ornare id massa egestas, venenatis sagittis mi. Donec aliquam vulputate arcu, ac tempus dolor interdum at. '},
        {photoUrl: '/assets/doc.png', name:'Dr.Eren Jaeger', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dignissim magna. Aliquam sed neque sollicitudin, euismod magna in, congue est. Sed in molestie risus, eget lobortis neque. Ut molestie nunc libero, sit amet malesuada sapien sagittis ornare. Sed vitae arcu velit. Quisque sit amet orci ultrices, blandit elit quis, mattis quam. Vivamus id sodales tellus, in placerat nunc. Etiam tristique rhoncus libero, et ullamcorper lacus posuere nec. Quisque nulla mi, maximus a tincidunt nec, facilisis vel ante. Donec ante lacus, ornare id massa egestas, venenatis sagittis mi. Donec aliquam vulputate arcu, ac tempus dolor interdum at. '}
    ]

    const pageList = [
        {text:'Dokter', linkUrl:'#'},
        {text:'Paramedis', linkUrl:'#'}
    ]

    return (
        <div className='h-full w-full bg-staf'>
            <PinkNavbar listButton={pageList}/>
            <div>
                {staffList.map((staff, index) => (
                    <div key={index} className={`flex ml-40 mt-12 ${index===staffList.length-1 ? 'pb-20' : ''}`}>
                        {/* <div className='w-photo h-photo absolute' style={{backgroundImage:`url(${staff.photoUrl})`, backgroundSize:'cover'}}/> */}
                        <div className='w-photo h-photo'>
                            <Image className='' src={staff.photoUrl} alt='' width='180px' height='240px' layout='fixed'/>
                        </div>
                        <div>
                            <div className='sticky ml-10 text-2xl'>{staff.name}</div>
                            <div className='sticky mt-4 mr-40 ml-10 text-md text-justify'>
                                {staff.desc}
                            </div>
                        </div>
                    </div>

                ))}
            </div>
            <Footer/>
        </div>
    )
}

export default Staff
