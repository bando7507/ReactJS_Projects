import React from 'react'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { useInView } from 'framer-motion'

function About() {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>
          {/* text */}
          <div className='flex-1'>
              <h2 className='h2 text-accent'>About me.</h2>
              <h3 className='h2 mb-4'>I'm a Freelance Front-end Developer with over 3 years of exprience</h3>
              <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rem, illum, nihil minima eveniet ea mollitia quae enim.</p>

              {/* stat */}
              <div className='flex mb-6 gap-x-6 lg:gap-x-10'>
                <div>
                  <div className='text-[40px] text-gradient mb-2'>
                    <CountUp start={0} end={13} duration={3}/>
                  </div>
                  <div>
                    Years of <br />
                    Experience
                  </div>
                </div>
                <div>
                  <div className='text-[40px] text-gradient mb-2'>
                    <CountUp start={0} end={15} duration={3}/>
                    k+
                  </div>
                  <div>
                    Project <br />
                    Completed
                  </div>
                </div>
                <div>
                  <div className='text-[40px] text-gradient mb-2'>
                    <CountUp start={0} end={12} duration={3}/>
                    k+
                  </div>
                  <div>
                    Satidfied <br />
                    Clients
                  </div>
                </div>
              </div>
              <motion.div 
              variants={fadeIn('up', 0,6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='flex items-center gap-x-8 max-w-max mx-auto lg:mx-0 mb-12'>
              <button className='btn btn-lg'>Contact me</button>
              <a href="" className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About