import React from 'react'

import Image from '../assets/avatar.svg'

import { motion } from 'framer-motion'

import { TypeAnimation } from 'react-type-animation'

import { FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa'

import { fadeIn } from '../variants'


function Banner() {
  return (
    <section className='min-h-[85vh] flex items-center justify-center' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg:items-center'>

          <div className='flex-1 text-center lg:text-left'>
            <motion.h1 
            variants={fadeIn('up', 0,3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='text-[55px] leading-[1] font-bold mb-1 lg:text-[110px]'>
              BANDO <span>SAMA</span>
            </motion.h1>
            <motion.div 
            variants={fadeIn('up', 0,3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='mb-6 text-[36px] lg:text-[60px] font-semibold uppercase leading-[1]'> 
              <span className='text-white mr-4 block'>I am a</span>
              <TypeAnimation 
              sequence={[
                'web developper',
                2000,
                'mobile developper',
                2000
              ]}
              className='text-accent'
              wrapper='span'
              speed={50}
              repeat={Infinity}
              />
            </motion.div>
            <motion.p 
            variants={fadeIn('up', 0,6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita totam consequuntur sapiente tempora quod voluptate vero culpa magni.
            </motion.p>
            <motion.div 
            variants={fadeIn('up', 0,6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='flex items-center gap-x-6 max-w-max mx-auto lg:mx-0 mb-12'>
              <button className='btn btn-lg'>Contact me</button>
              <a href="" className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
            {/* social */}
            <motion.div 
            variants={fadeIn('up', 0,6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='flex text-[20px] max-w-max gap-x-6 mx-auto lg:mx-0'>
              <a href="">
                <FaYoutube />                
              </a>
              <a href="">
                <FaGithub />
              </a>
              <a href="">
                <FaDribbble />
              </a>
            </motion.div>
          </div>

          <motion.div 
          variants={fadeIn('down', 0,6)}
          initial='hidden'
          whileInView={'show'}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt="" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Banner