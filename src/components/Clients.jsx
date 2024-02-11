import React from 'react'
import { airbnb, binance, coinbase, dropbox } from '../assets'

const Clients = () => (
  <div className='flex items-center justify-between gap-4 flex-wrap mb-10'>
    <img src={airbnb} alt="airbnb" className='w-[170px]' />
    <img src={binance} alt="binance" className='w-[170px]' />
    <img src={coinbase} alt="coinbase" className='w-[170px]' />
    <img src={dropbox} alt="dropbox" className='w-[170px]' />
  </div>
)

export default Clients
