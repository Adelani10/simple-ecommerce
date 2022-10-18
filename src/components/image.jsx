import React from "react";
import { Con } from "../context";
import { useContext, useState } from "react";


export default function Image ({item}) {
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFav, addToCart, cart, removeFromCart} = useContext(Con)

    function whichHeart (heart) {
        if (heart.isFav){
            return <i className="fa-solid fa-heart text-5xl"></i>
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
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
            className="relative"
        >
                <article>
                    <img src={item.path} alt="Image" />
                </article>

                 <div className="font-semibold text-3xl">
                    <button onClick={() =>  toggleFav(item.id)} 
                            className="absolute top-5 left-5 text-red-600">
                                {whichHeart(item)}
                    </button>

                    <button className="absolute top-5 right-5 text-sky-200">
                        {whichIcon(item)}
                    </button>
                </div>
        </main>
    )
}