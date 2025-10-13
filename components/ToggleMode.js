// The toggle mode component 
'use client'
import {useEffect , useRef} from 'react'

import '../styles/ToggleMode.css'

function ToggleMode({bodyColor , setBodyColor , closeMenu}) {
   
    const menuRef = useRef(null)  //Reference the menu 
    

    const handleColorChange = (color) => {
     setBodyColor(color) ; 
     closeMenu() ;
    }

    useEffect(() => {
        const handleClickOut = (event) => {

            if(menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu() ; 
            }
        }

        document.addEventListener('mousedown', handleClickOut) 

        return () => {
              document.addEventListener('mousedown', handleClickOut) 
        }
    } , [closeMenu])

    return ( 
        <div className="toggle_content">

        <section className = "toggle-mode"  ref={menuRef}>
     
        
        <div onClick = {() => handleColorChange('Black')}
        className = {bodyColor === 'Black' ? 'Active' : ''}
          > 
        <p>Black</p>
        </div>

        <div onClick ={() => handleColorChange('Dark')}
        className = {bodyColor === 'Dark' ? 'Active' : ''}>
         <p>Dark</p>
        </div>

         <div onClick = {() => handleColorChange('System')}
        className = {bodyColor === 'System' ? 'Active' : ''}
         >
         <p>System</p>
        </div>
        </section>
        </div>
    )
}
export default ToggleMode