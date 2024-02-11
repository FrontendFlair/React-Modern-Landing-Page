import React from 'react'
import { quotes, people01, people02, people03 } from '../assets'

const Testimonial = () => (
  <div id='clients'>

    <div className="flex items-center justify-between flex-col sm:flex-row my-6 sm:my-12">
      <h2 className='w-full sm:w-1/2 text-white font-poppins font-semibold text-4xl sm:text-5xl text-balance leading-[60px]'>What people are saying about us</h2>
      <p className="w-full sm:w-1/2 pt-4 sm:pt-0 text-dimWhite text-balance font-normal font-poppins">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>

    {/* testimonial-container */}

    <div className="flex items-center flex-wrap justify-center lg:justify-between gap-8 mb-10 sm:mb-20">
      {/* teximonial 1 */}
      <div className="w-[320px] bg-black-gradient py-14 px-8 rounded-2xl space-y-6 text-white font-poppins">
        <img src={quotes} alt="quote" className='w-[30px]' />
        <p className="">Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
        <div className="flex items-start gap-3">
          <div className="">
            <img src={people01} alt="user" className='rounded-full w-[40px]' />
          </div>
          <div className="">
            <h5>Herman Jensen</h5>
            <p className='text-xs text-dimWhite'>Founder & Leader</p>
          </div>
        </div>
      </div>
      {/* teximonial 2 */}
      <div className="w-[320px] bg-black-gradient py-14 px-8 rounded-2xl space-y-6 text-white font-poppins">
        <img src={quotes} alt="quote" className='w-[30px]' />
        <p className="">It is usually people in the money business, finance, and international trade that are really rich.</p>
        <div className="flex items-start gap-3">
          <div className="">
            <img src={people02} alt="user" className='rounded-full w-[40px]' />
          </div>
          <div className="">
            <h5>Steve Mark</h5>
            <p className='text-xs text-dimWhite'>Founder & Leader</p>
          </div>
        </div>
      </div>
      {/* teximonial 3 */}
      <div className="w-[320px] bg-black-gradient py-14 px-8 rounded-2xl space-y-6 text-white font-poppins">
        <img src={quotes} alt="quote" className='w-[30px]' />
        <p className="">It is usually people in the money business, finance, and international trade that are really rich.</p>
        <div className="flex items-start gap-3">
          <div className="">
            <img src={people03} alt="user" className='rounded-full w-[40px]' />
          </div>
          <div className="">
            <h5>Kenn Gallagher</h5>
            <p className='text-xs text-dimWhite'>Founder & Leader</p>
          </div>
        </div>
      </div>
    </div>

  </div>
)

export default Testimonial
