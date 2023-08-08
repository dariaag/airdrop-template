import Head from "next/head";
import { Account } from "../components/Account";
import { Connect } from "../components/Connect";
import { Connected } from "../components/Connected";
import { ERC20 } from "../components/ERC20";
import Navbar from "../components/Navbar";
import { NetworkSwitcher } from "../components/NetworkSwitcher";
import Header from "./Header";
import Image from "next/image";
import img from "../../public/img/download.png";
//import "../../styles/global.css";
export function MainPage() {
  return (
    <div className="h-screen     bg-gradient-to-br from-indigo-200 via-[#F6F9FC]  to-yellow-100">
      <div className="flex justify-center mb-2">
        {" "}
        <Connect />
      </div>

      <Connected>
        <div className="flex justify-center mb-2"></div>

        <section className="z-10 w-screen pt-[100px] px-5 xl:px-0">
          <div className="h-full justify-center mx-20 mt-2 flex">
            <div className="absolute z-1 blur-lg	mt-60 rotate-12	w-[2000px] h-60 overflow-hidden">
              <Image
                width={2000}
                height={200}
                alt="Picture of the author"
                src={img}
              ></Image>
            </div>
            <div className=" z-0 px-10 py-10 bg-opacity-60 drop-shadow-2xl border border-white bg-white rounded-xl ">
              <h1> </h1>

              <Account />
              <hr />
              <ERC20 />
              <hr />
              <NetworkSwitcher />
            </div>
          </div>
        </section>
      </Connected>
    </div>
  );
}
