// Header.js
'use client'

import { useState, useEffect, useMemo } from 'react'
import { FaReact } from "react-icons/fa";
import ToggleMode from '../components/ToggleMode'
import '../styles/Header.css'
import Image from 'next/image'

function Header() {
    const [isVisible, setIsVisible] = useState(false)
    const [bodyColor, setBodyColor] = useState('Dark')

    // Ouvre/ferme le menu
    const toggleMenu = () => {
        setIsVisible(!isVisible)
    }

    // Change the body color 
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if(bodyColor === 'Light') {
                document.body.style.background = `hsl(217, 61%, 90%)`
            } else if(bodyColor === 'Dark') {
                document.body.style.background = `hsl(227, 75%, 14%)`
            } else if(bodyColor === 'System') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                document.body.style.background = prefersDark
                    ? `hsl(227, 75%, 14%)`
                    : ``
            }
        }
    }, [bodyColor])

    // Couleur dynamique du header

    const headerStyle = useMemo(() => {
        if (bodyColor === 'Light') return { backgroundColor: `hsl(0, 0%, 78%)`, color: '#1e293b' }
        if (bodyColor === 'Dark') return { backgroundColor: `hsl(225, 23%, 24%)`, color: 'white' }
        if (bodyColor === 'System' && typeof window !== 'undefined') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            return prefersDark
                ? { backgroundColor: `hsl(225, 23%, 24%)`, color: 'hsl(225, 23%, 24%)' }
                : { backgroundColor: `hsl(225, 23%, 24%)`, color: 'white' }
        }
        return { backgroundColor: `hsl(225, 23%, 24%)`, color: 'white' }
    }, [bodyColor])

    return (
        <>
            <section className='header_logo' style={headerStyle}>
                <div className="header">
                    <span className="flex_icon">
                        <FaReact className="react_img" />
                        <span>
                            <p style={{ color: headerStyle.color, fontSize: '20px', position: 'relative', top: '10px' }}>
                                Extensions
                            </p>
                        </span>
                    </span>

                    <div className="icon_sun" onClick={toggleMenu}>
                        {bodyColor === 'Light' && (
                            <Image src='/icon-moon.svg' alt="icon" width={30} height={30} className='icon_moon'/>
                        )}
                        {bodyColor === 'Dark' && (
                            <Image src='/icon-sun.svg' alt="icon" width={30} height={30} />
                        )}
                        {bodyColor === 'System' && (
                            <Image src='/icon-sun.svg' alt="icon" width={30} height={30} />
                        )}
                    </div>
                </div>
            </section>

            {isVisible && (
                <ToggleMode
                    bodyColor={bodyColor}
                    setBodyColor={setBodyColor}
                    closeMenu={() => setIsVisible(false)} 
                />
            )}
        </>
    )
}

export default Header
