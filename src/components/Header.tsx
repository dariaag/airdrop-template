import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  
  /* const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  }, []); */
  return (
    <header className="fixed top-0 bg-gray-50  w-screen	clearNav z-50 bg-transparent">
      <nav
        aria-label="Global"
        className="mx-auto flex flex-row w-screen justify-start pt-2 pb-4 pl-0 pr-0 lg:pl-10 lg:pr-10"
      >
        <div className="grid place-content place-content-start grid-cols-1  lg:visible lg:block"><a
        href="https://twitter.com/steventey/status/1613928948915920896"
        target="_blank"
        rel="noreferrer"
        className="mx-auto mb-5 flex max-w-fit animate-fade-upitems-center px-4 py-2 justify-center space-x-2 overflow-hidden  bg-opacity-25  rounded-full bg-gray-500"
      >
        <p className="text-md font-semibold text-[#424242]">Airdrop Dapp</p>
      </a></div>

        {/* <ul className="flex items-center gap-2 text-xl lg:text-3xl text-black">
          <li className="hidden lg:block">
            <a className="border  border-black hover:bg-yellow-100 rounded-full px-4 pt-1.5 pb-1">
              {" "}
              <Link href="/contact">CONTACT </Link>
            </a>
          </li>

          <li>
            <a
              className="border border-black hover:bg-green-300 rounded-full mx-5 px-4  pt-1.5 pb-1"
              href=""
            >
              {" "}
              <Link href="/blog">BLOG</Link>{" "}
            </a>
          </li>

          <li>
            <a
              className="inline-flex border border-black hover:bg-blue-300 rounded-full items-center gap-2  px-4  pt-1.5 pb-1"
              href="https://caradaria.lemonsqueezy.com/"
              target="_blank"
            >
              SHOP
            </a>
          </li>
        </ul> */}
      </nav>
    </header>
  );
}
