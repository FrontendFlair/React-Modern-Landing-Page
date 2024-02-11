import React from 'react'
import { logo, facebook,instagram,linkedin,twitter } from '../assets'

const Footer = () => (
  <div className='font-poppins text-white'>
    <footer className="flex items-start justify-between flex-wrap gap-6">
      <div className="w-52">
        <img src={logo} alt="logo" className='w-44' />
        <p className='text-xs text-balance text-dimWhite pt-6'>A new way to make the payments easy, reliable and secure.</p>
      </div>

      <div className="w-40">
        <h6 className="pb-6">Usefull Links</h6>
        <ul className="list-none space-y-2">
          <li className='text-dimWhite cursor-pointer hover:underline'>Content</li>
          <li className='text-dimWhite cursor-pointer hover:underline'>How it Works</li>
          <li className='text-dimWhite cursor-pointer hover:underline'>Create</li>
          <li className='text-dimWhite cursor-pointer hover:underline'>Explore</li>
          <li className='text-dimWhite cursor-pointer hover:underline'>Terms & Services</li>
        </ul>
      </div>

      <div className="w-40">
        <h6 className="pb-6">Community</h6>
        <ul className="list-none space-y-2">
          <li className='text-dimWhite cursor-pointer hover:underline'>Help Center</li>
          <li className='text-dimWhite cursor-pointer hover:underline'>Partners</li>
          <li className='text-dimWhite cursor-pointer hover:underline'>Suggestions</li>
          <li className='text-dimWhite cursor-pointer hover:underline'>Blog</li>
          <li className='text-dimWhite cursor-pointer hover:underline'>Newsletters</li>
        </ul>
      </div>

      <div className="w-40">
        <h6 className="pb-6">Partner</h6>
        <ul className="list-none space-y-2">
          <li className='text-dimWhite cursor-pointer hover:underline'>Our Partner</li>
          <li className='text-dimWhite cursor-pointer hover:underline'>Become a Partner</li>
        </ul>
      </div>

    </footer>

    <hr className='mt-10' />

    {/* sub footer */}

    <div className="flex items-center justify-between flex-col ss:flex-row py-10">
      <div>
        <p className='text-xs text-dimWhite'>Copyright &copy; 2021 HooBank. All Rights Reserved.</p>
      </div>
      <div className='flex items-center gap-6 pt-6 ss:pt-0'>
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={linkedin} alt="linkedin" />
      </div>
    </div>

  </div>
)

export default Footer
