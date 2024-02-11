import React from 'react'
import Button from "./Button"
import { star, send, shield } from '../assets'

const Business = () => (
  <section id='features' className='my-6 flex flex-col sm:flex-row items-start justify-between gap-3'>

    <div className="w-full sm:w-1/2 mt-16 sm:mt-0 text-white space-y-6">
      <h2 className='text-3xl sm:text-4xl font-semibold text-balance font-poppins leading-[50px]'>You do the business, we’ll handle the money.</h2>
      <p className='text-base text-dimWhite text-balance font-poppins'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
      <Button />
    </div>

    {/* right section */}

    <div className="space-y-8 mt-12 sm:mt-0 w-full sm:w-1/2">
      {/* card 1 */}
      <div className="bg-black-gradient px-4 sm:px-6 py-3 rounded-xl sm:rounded-3xl flex items-center gap-6 text-white ">
        <div>
          <img src={star} alt="star" className='w-[50px]' />
        </div>
        <div>
          <h4 className='text-xl font-semibold font-poppins pb-2'>Rewards</h4>
          <p className='text-dimWhite font-poppins text-balance text-base'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
        </div>
      </div>
      {/* card 2 */}
      <div className="bg-black-gradient px-4 sm:px-6 py-3 rounded-xl sm:rounded-3xl flex items-center gap-6 text-white ">
        <div>
          <img src={shield} alt="shield" className='w-[50px]' />
        </div>
        <div>
          <h4 className='text-xl font-semibold font-poppins pb-2'>100% Secured</h4>
          <p className='text-dimWhite font-poppins text-balance text-base'>We take proactive steps make sure your information and transactions are secure.</p>
        </div>
      </div>
      {/* card 3 */}
      <div className="bg-black-gradient px-4 sm:px-6 py-3 rounded-xl sm:rounded-3xl flex items-center gap-6 text-white ">
        <div>
          <img src={send} alt="send" className='w-[50px]' />
        </div>
        <div>
          <h4 className='text-xl font-semibold font-poppins pb-2'>Balance Transfer</h4>
          <p className='text-dimWhite font-poppins text-balance text-base'>A balance transfer credit card can save you a lot of money in interest charges.</p>
        </div>
      </div>
    </div>

  </section>
)

export default Business
