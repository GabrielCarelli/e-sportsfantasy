import { Archivo_Black } from 'next/font/google';
import React from 'react'
const archivoFont = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});
export default function Player() {
  return (
    <div className='min-h-screen bg-green-950 w-full text-gray-200 flex flex-col items-center'>
      <header className='w-full bg-green-900 text-gray-300 py-6 text-center text-4xl'>
        <h1 className={archivoFont.className}>Jogadores</h1>
      </header>
    </div>
  )
}
