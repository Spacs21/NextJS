import React from 'react'

const Company = () => {
  return (
    <div>
        <div className='container mx-auto p-5 py-24'>
            <div className='flex flex-col mb-16'>
            <p className='text-[#232536] w-[640px]'>COMPANY</p>
                <h1 className='text-[46px] w-[600px] font-bold leading-[68px] text-[#232536]'>Award-winning Company seen and used by millions around the world.</h1>
                <p className='text-[#232536] w-[640px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. </p>
            </div>
            <div className='flex justify-between gap-4'>
                <div className='w-[100%] border bg-agent h-[446px] object-cover bg-cover bg-no-repeat bg-center'></div>
                <div className='w-[100%] border bg-agentTwo h-[446px] object-cover bg-cover bg-no-repeat bg-center'></div>
                <div className='w-[100%] border bg-agentThree h-[446px] object-cover bg-cover bg-no-repeat bg-center'></div>
            </div>
        </div>
    </div>
  )
}

export default Company