import React from 'react'
import { BiClipboard, BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsBriefcase, BsChatSquareText } from 'react-icons/bs'
import { Link } from 'react-scroll/modules'


function Nav() {
  return (
    <nav className='fixed bottom-2 w-full lg:bottom-8 overflow-hidden z-50'>
        <div className="container mx-auto">
            <div className="w-full rounded-full bg-black/20 h-[90px] backdrop-blur-2xl flex justify-between items-center max-w-[460px] mx-auto text-white/50 text-2xl px-5">
                <Link activeClass='active' spy={true} offset={-200}  to='home' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                    <BiHomeAlt />
                </Link>
                <Link activeClass='active' spy={true}  to='about' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                    <BiUser />
                </Link>
                <Link activeClass='active' spy={true}  to='service' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                  <BiClipboard />
                </Link>
                <Link activeClass='active' spy={true}  to='work' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                    <BsBriefcase />
                </Link>
                <Link activeClass='active' spy={true}  to='contact' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                    <BsChatSquareText />
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Nav