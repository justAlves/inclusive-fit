import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Workshops() {
  return (
    <div className='h-screen flex flex-col items-center p-4'>
      <div className='flex justify-between items-center w-full'>
        <Link href={'/'} className='text-lg font-semibold'>{'< Voltar'}</Link>
        <h1 className='text-xl font-bold'></h1>
        <div></div>
      </div>
      <Image
        src={'/smiling-face.png'}
        alt='rosto feliz'
        height={100}
        width={100}
        className='mt-12'
      />
      <h1 className='mt-4 font-bold text-3xl text-center'>Ainda não há nenhum evento marcado</h1>
      <p className='mt-2'>Não se preocupe, consulte novamente mais tarde</p>
    </div>
  )
}
