"use client";
import Image from 'next/image'
import Navigation from './components/navigation';
import 'flowbite';


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
          <div className='entry'>
          <h1>Découvrez CAMPUS QUEST</h1>
            <picture>
              <img src="/images/campus.jpg" alt=""/>
            </picture>
            <p>Amusez-vous à résoudre les quêtes en scannant les QRCODES cachés dans le campus</p>
            <a className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' href="/quetes">Explorer</a>
          </div>
    
        </div>
      </div>
    </main>
  )
}
