'use client'

import { useState } from "react";

interface Props {
  name: string;
  description: string;
}

export default function Card({name, description}: Props) {
  const [done, setDone] = useState(false)

  return (
    <div className='px-4 py-4 border border-b-4 border-black rounded-md mt-4 flex justify-between items-center'>
      <div className='w-2/3 overflow-hidden'>
        <h2 className={done ? 'line-through' : ''}>{name}</h2>
      </div>
      <div 
        onClick={() => setDone(!done)}
        className={`h-8 w-8 rounded-full border border-black ${done ? 'bg-green-500' : 'bg-transparent'}`}>
      </div>
    </div>
  )
}
