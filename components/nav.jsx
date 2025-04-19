"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect,useState} from "react";
import {signIn,signOut,useSession,getProviders} from 'next-auth/react';

const nav = () => {
  const isUserLoogedIn=true;
  return (
    <nav className="">
      <Link href="/" className="flex-center">
      <Image src="/public/assets/images/logo.svg"
      className="object-contain"
      width={30}
      height={30}
      alt="logo"/>
      <p className="logo_text">PROMPTOPIA</p>
      </Link>
    //desktop navigation
    <div className="sm:flex hidden">
      {isUserLoogedIn?
      (<div>
        <Link href="/create-prompt" className="black-btn">Create Post</Link>
        <button className="outline_button" onclick="signOut" type="button">
          Sign Out
        </button>
      </div>):(<></>)}
    </div>

    </nav>
  )
}

export default nav
