import React from "react";
import { CartItem } from "../components/cartItem";
import { useState, useContext } from "react";
import { Con } from "../context";


function Cart () {
    const [order, setOrder] = useState("Place Order")
    const {cart, emptyCart} = useContext(Con)
    const total = 9.99 * cart.length

    const cartElements = cart.map((item, index) => {
        return <CartItem key={index} item={item} />
    })

    function handleOrder() {
        setOrder("Ordering...")

        setTimeout(timeOutActivity, 3000)
        function timeOutActivity () {
            setOrder("Order Placed!")

            setTimeout(() => emptyCart(), 2000)
        }
    }


    return (
        <section className={`${cart.length > 0 ? 'space-y-8' : ''} flex flex-col`} >

            {cart.length === 0 && <h2 className="absolute text-center font-bold text-2xl top-1/2 left-1/2 translate-x-[-50%] translate-y-[100%] font-mono">
                Add Items 😋
            </h2>}

            <div className="space-y-4">
                {cartElements}
            </div>

            {cart.length > 0 && <h1 className="text-right text-4xl md:text-6xl text-stone-500 px-2 md:px-6">
                Total : <span>${total}</span>
            </h1>}

            {cart.length > 0 && 
                <button onClick={handleOrder} 
                        className="text-bold btn self-center px-4 py-2 border-4 flex justify-center font-semibold tracking-widest font-montserrat hover:text-red-600 hover:bg-transparent border-stone-400 rounded-sm bg-stone-400 text-[#f5f5f5]"
                >
                    {order}
                </button>}
        </section>
    )
}

export {Cart}