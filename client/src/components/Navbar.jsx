import React, { useState } from "react";
import Logo from "../assets/tokopedia_play-removebg-preview.png";

export default function Navbar() {
  return (
    <header className='bg-white drop-shadow-lg'>
      <nav
        className='flex items-center justify-center p-0 lg:px-2'
        aria-label='Global'
      >
        <div className='flex'>
          <a href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Tokopedia Play</span>
            <img className='w-auto h-20' src={Logo} alt='' />
          </a>
        </div>
      </nav>
    </header>
  );
}
