import React from 'react'
import '../App.css'
import { Footer } from "flowbite-react";


export function Component() {
  return (
    <Footer container>
      <div className="w-full text-center flex-row bg-gradient-to-r from-stone-900 to-stone-400 text-white">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
          />
          <Footer.LinkGroup>
            <Footer.Link href="aboutus">About us</Footer.Link>
            <Footer.Link href="privacy">Privacy Policy</Footer.Link>
            <Footer.Link href="faq">FAQ</Footer.Link>
            <Footer.Link href="contact">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="homepage" by="Flowbite™" year={2024} />
      </div>
    </Footer>
  );
}