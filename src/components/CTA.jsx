import React from 'react'
import Button from './Button'

const CTA = () => (
  <div className='flex items-center justify-between flex-col sm:flex-row bg-black-gradient-2 p-12 gap-6 rounded-3xl my-10 sm:my-20'>
    <div className="text-center sm:text-left">
      <h2 className="text-4xl font-semibold font-poppins text-white pb-4 leading-[55px]">Let’s try our service now!</h2>
      <p className="text-dimWhite text-sm text-balance">Everything you need to accept card payments <br /> and grow your business anywhere on the planet.</p>
    </div>
    <div className='mt-6 sm:mt-0'>
      <Button />
    </div>
  </div>
)

export default CTA
