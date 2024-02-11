import React from 'react'
import { bill, apple, google, card } from '../assets'
import Button from './Button'

const Billing = () => (
  <div id='product'>
    <section className='my-12 flex flex-col-reverse sm:flex-row items-center justify-between gap-3'>
      {/* left container */}
      <div className="w-full sm:w-1/2 mb-4 sm:mb-0 flex items-center justify-center">
        <img src={bill} alt="bill" className='w-full max-w-[500px]' />
      </div>

      {/* right container */}

      <div className="w-full sm:w-1/2 mt-6 sm:mt-0 text-white space-y-6">
        <h2 className='text-3xl sm:text-4xl leading-[50px] font-semibold text-balance font-poppins'>Easily control your billing & invoicing.</h2>
        <p className='text-base text-dimWhite text-balance font-poppins'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        {/* store */}
        <div className="flex item-center gap-4">
          <img src={apple} alt="apple" />
          <img src={google} alt="google" />
        </div>
      </div>

    </section>
    <section className='mb-12 flex flex-col sm:flex-row items-center justify-between gap-3'>

        {/* left container */}

      <div className="w-full sm:w-1/2 mb-4 sm:mt-0 text-white space-y-6">
        <h2 className='text-3xl sm:text-4xl leading-[50px] font-semibold text-balance font-poppins'>Find a better card deal in few easy steps.</h2>
        <p className='text-base text-dimWhite text-balance font-poppins'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button />
      </div>

         {/* right container */}
         <div className="w-full sm:w-1/2 flex items-center justify-center">
        <img src={card} alt="card" className='w-full max-w-[500px]' />
      </div>

    </section>
  </div>
)

export default Billing
