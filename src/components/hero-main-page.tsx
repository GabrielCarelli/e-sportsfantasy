import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const HeroMainPage = () => {

  return (
    <section className='py-8 bg-zinc-800'>
        <div className='mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row lg:items-stretch gap-x-6'>
            <div className='lg:w-[47%] py-4 lg:py-8 xl:py-12 space-y-7'>
                <h1 className='text-white font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl'>
                Monte o Time dos  <span className='text-red-700 font-extrabold'>Sonhos </span>no Rift!
                </h1>
                <p className='text-gray-300'>
                    Escolha seus campeões favoritos, escale sua equipe perfeita e desafie amigos e rivais. Mostre que você é o verdadeiro estrategista do League of Legends!
                </p>
                <div className='max-w-md w-full'>
                    <Button className='bg-transparent text-white font-extrathin text-xl hover:text-red-200 hover:bg-red-800 hover:border-0' variant="outline" >Montar meu time!   </Button>
                </div>
            </div>
            <div className='flex flex-1 ml-72 relative lg:h-auto'>
            <div className='relative h-max lg:absolute left-0 top-0 flex lg:h-full lg:w-auto w-11/12'>
            <span className="absolute top-0 left-32 w-3/5 aspect-square rounded-md -rotate-[30deg] translate-y-20 origin-center border border-red-200 dark:border-gray-800"></span>
            <span className="absolute top-1/2 right-16 w-2/5 aspect-square rounded-md rotate-12 -translate-y-1/2 origin-center border border-red-200 dark:border-gray-800"></span>
            <Image src={'/braum.png'} alt={'braum'} width={1000} height={1000} className='lg:w-auto lg:h-full relative'/>
            </div>
        </div>
        </div>
    </section>
  )
}

export default HeroMainPage