import React from 'react'
import Container from '../components/commonComponents/Container'
import StoreBanner from '../components/storeComponents/StoreBanner'
import ProductCard from '../components/storeComponents/ProductCard'
import PaginationArea from '../components/PaginationArea'

const StorePage = () => {
  return (
    <Container>
      <StoreBanner/>
      <div className='font-[Poppins] text-black mt-[22px] mb-5'>
        <h5 className='font-bold mb-[23px]'>Categories</h5>
        <ul className='flex items-center gap-[15px] p-[14px] bg-white rounded-[7px] font-medium text-sm text-black cursor-pointer'>
          <li className='duration-300 hover:text-[#23D2E2]'>Desktop</li>
          <li className='duration-300 hover:text-[#23D2E2]'>Laptop</li>
          <li className='duration-300 hover:text-[#23D2E2]'>Component</li>
          <li className='duration-300 hover:text-[#23D2E2]'>Monitor</li>
          <li className='duration-300 hover:text-[#23D2E2]'>UPS</li>
          <li className='duration-300 hover:text-[#23D2E2]'>Tablet</li>
          <li className='duration-300 hover:text-[#23D2E2]'>Office Equipment</li>
          <li className='duration-300 hover:text-[#23D2E2]'>Camera</li>
          <li className='duration-300 hover:text-[#23D2E2]'>Security</li>
          <li className='duration-300 hover:text-[#23D2E2]'>Networking</li>
          <li className='duration-300 hover:text-[#23D2E2]'>Software</li>
          <li className='duration-300 hover:text-[#23D2E2]'>Accessories</li>
          <li className='duration-300 hover:text-[#23D2E2]'>Gadget</li>
          <li className='duration-300 hover:text-[#23D2E2]'>Gaming</li>
        </ul>
      </div>
      <div className='grid grid-cols-4 justify-between gap-5 mb-10'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
      <PaginationArea/>
    </Container>
  )
}

export default StorePage
