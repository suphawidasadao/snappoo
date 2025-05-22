"use client";

import React from 'react'
import { FaXTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-center items-center gap-4 my-10 text-sm text-gray-500">
          <span>© 2025 Snappoo Inc.</span>
          <div className="flex gap-4 text-xl">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <FaXTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
        </footer>
  )
}

export default Footer