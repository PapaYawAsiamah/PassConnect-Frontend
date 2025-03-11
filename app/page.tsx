"use client"; // Ensure this is a client component for Next.js 13+

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const loginRef = useRef<HTMLButtonElement>(null);
  const signUpRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.from(headingRef.current, { y: 100, opacity: 0 })
      .from(paragraphRef.current, { y: 100, opacity: 0 }, "-=0.8")
      .from(loginRef.current, { y: 100, opacity: 0 }, "-=0.8")
      .from(signUpRef.current, { y: 100, opacity: 0 }, "-=0.8");
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center h-screen overflow-hidden"
    >
      <h1
        ref={headingRef}
        className="font-[var(--font-poppins)] text-8xl max-h-20 mb-40"
      >
        Welcome to{" "}
        <span className="text-blue-700 font-medium">PassConnect</span>
      </h1>

      <p
        ref={paragraphRef}
        className="font-poppins text-600 w-4xl absolute text-center mt-10"
      >
        PassConnect is your gateway to exciting tech workshops. Discover,
        register, and manage your sessions easily – all in one place. Connect,
        learn, and grow with PassConnect!
      </p>

      <Link href="/login" className="absolute mt-40 ">
        <button
          ref={loginRef}
          className="border-blue-400 border-2 w-30 h-10 
          rounded-lg drop-shadow-sm mr-[40px] focus:outline-none mt-[40px] text-sm 
          px-5 py-2.5 text-center hover:bg-blue-700 dark:hover:border-blue-700 dark:border-blue-600
           dark:focus:ring-blue-800 hover:border-0 "
        >
          Login
        </button>
      </Link>

      <Link href="/signup" className="absolute mt-40 ml-60">
        <button
          ref={signUpRef}
          className="border-0 bg-blue-700 w-30 h-10 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 
          focus:outline-none mt-[40px] focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
           dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign Up
        </button>
      </Link>
    </div>
  );
}
