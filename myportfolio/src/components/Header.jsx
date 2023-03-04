import React from 'react'
import Logo from '../assets/logo.svg'

function Header() {
  return (
    <div className='py-8'>
        <div className='container mx-auto'>
            <div className='flex items-center justify-between'>

                <img src={Logo} alt="" />
                <button className='btn btn-sm'>Work with me</button>
            </div>
        </div>
    </div>
  )
}

export default Header