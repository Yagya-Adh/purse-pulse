"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";
import ButtonPills from "../components/ButtonPills";
import logoImg from "../assets/logo.webp";

interface IlinksList {
  id: number;
  path: string;
  name?: string;
}

interface NavBarProps {
  routes: IlinksList[];
}

const NavBar: React.FC<NavBarProps> = ({ routes }) => {
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      <nav className="bg-meroColor-platinum-10 items-center flex flex-col md:flex-row justify-center md:justify-between py-10 px-10">
        <div className="transition-all ease-in-out w-full flex items-center justify-between ">
          <Link href="/">
            <Image src={logoImg} width={160} alt="logo_" />
          </Link>
          {!isClick ? (
            ""
          ) : (
            <ul className="hidden md:flex justify-center items-center">
              {routes.slice(1, 10).map((route) => (
                <li
                  key={route.id}
                  className="text-meroColor-dark-gray text-wrap text-sm me-5 hover:text-meroColor-electric-indigo text-center"
                >
                  <Link href={route.path}>{route.name}</Link>
                </li>
              ))}
              <ButtonPills
                btnName="Start free trial"
                hoverColor="hover:ring-meroColor-electric-indigo"
                hoverTextColor="hover:text-meroColor-electric-indigo"
              />
            </ul>
          )}
          <div className="md:hidden">
            <Bars3Icon
              onClick={() => setIsClick(!isClick)}
              className="h-6 w-6 hover:text-meroColor-electric-indigo"
            />
          </div>
        </div>
      </nav>
      {isClick && (
        <ul className="md:hidden rounded-b-[17%] flex flex-col items-center justify-between mx-auto text-center bg-meroColor-white-10 h-72 transition-all ease-in-out duration-700 py-8">
          {routes.slice(1, 10).map((route) => (
            <li
              key={route.id}
              className="text-meroColor-dark-gray text-wrap me-5 hover:text-meroColor-electric-indigo text-center"
            >
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
          <ButtonPills
            btnName="Start free trial"
            hoverColor="hover:ring-meroColor-electric-indigo"
            hoverTextColor="hover:text-meroColor-electric-indigo"
          />
        </ul>
      )}
    </>
  );
};

export default NavBar;
