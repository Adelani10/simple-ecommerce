import React from "react";
import { Con } from "../context";
import { useContext, useState } from "react";


export default function Image ({item}) {
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFav, addToCart, cart, removeFromCart} = useContext(Con)

    function whichHeart (heart) {
        if (heart.isFav){
            return <i className="fa-solid fa-heart md:text-5xl text-3xl"></i>
        }
        else if(isHovered){
            return <i className="fa-regular fa-heart"></i>
        }
    }

    function whichIcon (icon) {
        const meetsCondition = cart.some(item => item.id === icon.id)
        if (meetsCondition){
            return <i className="fa-solid fa-check-double" onClick={()=> removeFromCart(item.id)}></i>
        }
        else if(isHovered){
            return <i className="fa-solid fa-plus" onClick={() => addToCart(item)}></i>
        }
    }

    return (
        <main 
            id = {`item-${item.id}`}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
            className="relative"
        >
            <img src={item.path} alt="Image" className="h-full w-full object-co" />
            <div className="font-semibold md:text-4xl text-2xl">
                <button onClick={() =>  toggleFav(item.id)} 
                        className="absolute top-2 left-2 text-red-600">
                            {whichHeart(item)}
                </button>

                <button className="absolute top-2 right-2 text-sky-200">
                    {whichIcon(item)}
                </button>
            </div>
        </main>
    )
}