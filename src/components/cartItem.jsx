import React from "react";
import { useContext } from "react";
import { Con } from "../context";

function CartItem ({item}) {
    const {removeFromCart} = useContext(Con)

    return (
        <div>
            <section className="font-bold flex justify-between items-center px-2 md:px-6 py-4 border-b">
                <article className="flex space-x-4 md:space-x-8">
                    <button onClick={() => removeFromCart(item.id)} className="text-2xl md:text-4xl text-red-600">
                        <i className="fa-solid fa-trash"></i>
                    </button>
                    <img src={item.path} alt="img" className="w-[20%] rounded-sm" />
                </article>

                <div className="text-2xl md:text-4xl text-stone-400">
                    $<span className="text-stone-500">9.99</span>
                </div>
            </section>
        </div>
        
    )
}

export {CartItem}