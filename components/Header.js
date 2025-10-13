// The header component 
'use client'
import {useState , useEffect} from 'react' 
import { FaReact } from "react-icons/fa";
import ToggleMode from '../components/ToggleMode'
import '../styles/Header.css'
import Image from 'next/image'

function Header() {

    const [isVisible, setIsVisible] = useState(false) 
    const [bodyColor , setBodyColor] = useState('Dark') 
    
    
    const toggleMenu = () => {
        setIsVisible(!isVisible)
    }
 
    // Function for change body

    useEffect(() => {
        if(bodyColor === 'Black') {
            document.body.style.background = 'hsla(225, 67%, 1%, 1.00)'
            
        }else if(bodyColor === 'Dark') {
             document.body.style.background = ' hsl(227, 75%, 14%)'

        }else if(bodyColor === 'System') {
             const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            document.body.style.background = prefersDark
        ? 'hsl(227, 75%, 14%)'
        : 'hsl(227, 75%, 14%)'
        }
    }, [bodyColor])
    
    return (
        <>
     <section className='header_logo'>

        <div className="header">
             <span className="flex_icon">
         <FaReact  className = 'react_img'/>

         <span>
            <p style= {{color:'white', fontSize:'20px', position: 'relative', top:'10px'}}>Extensions</p>
         </span>
     </span>
    
   
    <div className="icon_sun" onClick= {toggleMenu} >
          <Image 
       src='/icon-sun.svg'
       alt="the dak icon"
       width={30} 
       height= {30} 
       /> 
    </div>
        </div>
    </section>
    
    {isVisible && 
    <ToggleMode bodyColor = {bodyColor} 
    setBodyColor= {setBodyColor} 
    closeMenu = {() => setIsVisible(false)} 
    />}
    </>
    )
}
export default Header