import React from "react";
import { Link } from "react-router-dom";
import { Con } from "../context";
import { useContext, useEffect, useRef } from "react";

export default function Header () {
    const scrollRef = useRef()

    useEffect(() => {
        function handleScroll () {
            const navHeight = scrollRef.current.getBoundingClientRect().height
            if (window.pageYOffset > navHeight + 10) {
                scrollRef.current.classList.add("fixedNav")
            }
            else{
                scrollRef.current.classList.remove("fixedNav")
            }
        }
        window.addEventListener("scroll",  handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const {cart} = useContext(Con)

    return (
        <header ref={scrollRef}
            className="flex justify-between items-center px-2 h-24 md:px-12 text-3xl bg-gradient-to-tl from-red-600 to-sky-200">
            
            <Link to="/" className="text-black font-semibold">Burg.🍔</Link>
            <article className="flex items-center md:space-x-2">
                <p className="italic text-lg hidden sm:inline text-amber-900 tracking-widest">...aren't you hungry yet?</p>
            </article>

            <Link to="/cart" className="relative ">
                <i className="fa-solid fa-cart-shopping text-black"></i>
                <p className="absolute top-1/2 text-xs left-1/2 translate-y-[-80%] translate-x-[-30%] text-white font-bold">{cart.length === 0 ? '' : cart.length}</p>
            </Link>
        </header>
    )
}