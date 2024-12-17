import Image from 'next/image'
import React from 'react'
import img from "@/assets/career.png"
import emoji from "@/assets/emoji.png"

const Career = () => {
  return (
    <div>
        <div className='container mx-auto px-5 py-20'>
            <div className='flex flex-col justify-center items-center text-center gap-4'>
                <p className='text-[#232536] font-[500]'>CAREER AT FINSWEET</p>
                <h1 className='text-[48px] font-bold w-[580px] leading-[58px]'>We hired people who are
                Always Passionate about what they do</h1>
                <p className='text-[#232536] w-[550px]'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw .</p>
                <Image src={img} alt='img' className='mt-10'/>
                <p className='text-[#232536] font-[500] flex items-center justify-center flex-col gap-5 text-[18px] mt-14'>See Our open positions <br/><Image src={emoji} alt='emoji'/></p>

            </div>
        </div>
    </div>
  )
}

export default Career