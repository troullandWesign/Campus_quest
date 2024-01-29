"use client";
import Image from 'next/image'
import Navigation from './components/navigation';
import 'flowbite';
import Localisation from '@/app/components/localisation'


export default function Home() {
  return (
    <main>
      <div>
         <div
         className="h-screen w-full bg-gray-900 bg-cover bg-no-repeat"
         style={{
           backgroundImage:
          "url('https://wallpapers-clan.com/wp-content/uploads/2023/07/fantasy-mountains-clouds-landscape-background.jpg')"
         }}
         >
        <Localisation></Localisation>
          
        </div>
      </div>
    </main>
  )
}
