import React from 'react'
import styles from '../style'
import { robot } from '../assets'

const Hero = () => (
  <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div className={`flex flex-col sm:flex-row items-center sm:items-start sm:justify-between px-6 sm:px-16`}>

      {/* left section */}

      <div className="w-full sm:w-1/2 space-y-3 text-white">
        {/* discount banner */}
        <div className="bg-discount-gradient p-3 rounded-md inline-block">
          <p className='text-dimWhite uppercase '> <span className='text-white'>20%</span> Discount for <span className='text-white'>1 Month</span> account
          </p>
        </div>
        <h1 className='text-[45px] sm:text-[60px] sm:leading-[80px] leading-[60px] capitalize text-white font-semibold'>
          The next <br /> <span className='text-gradient'>Generation</span> <br /> payment method
        </h1>
        <p className="text-dimWhite text-sm text-balance md:w-10/12">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rates, annual fees.</p>
      </div>

      {/* right section */}

        <div className="w-10/12 mt-8 sm:mt-0 sm:w-1/2">
          <img src={robot} className='w-full ss:w-10/12' alt="" />
        </div>

    </div>
  </section>
)

export default Hero
