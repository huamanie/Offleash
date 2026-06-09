'use client'
import SecondLogo from '../public/offleash_logo-revised.png' 
import Image from 'next/image'
import { useEffect, useState } from 'react'

const mobileScreen = 400
const normalScreen = 500
const largeScreen = 800
const initialScreenSize = 0

export default function MainPage() {
    const [currentScreenSize, setCurrentScreenSize] = useState(initialScreenSize)
    const [widthSize, setWidthSize] = useState(normalScreen)

    useEffect(() =>{

        setCurrentScreenSize(window.innerWidth)

        const onResize = () =>{
            setCurrentScreenSize(window.innerWidth)
        }
        window.addEventListener('resize', onResize)


        if (currentScreenSize > 1440) {
            setWidthSize(largeScreen)
        } else if (currentScreenSize < 500 && currentScreenSize != initialScreenSize) {
            setWidthSize(mobileScreen)
        } else {
            setWidthSize(normalScreen)
        }

        // console.log('widthsize ' + widthSize)
        // console.log('window size ' + currentScreenSize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [currentScreenSize])


    return (
        <div className='flex justify-center mb-32 md:mb-24'>
            <Image
                src={SecondLogo}
                alt='Our cool second logo that cannot load :('
                width={widthSize}
            />
        </div>
    )
}
