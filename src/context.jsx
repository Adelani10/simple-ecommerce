import React from "react";
import { useState, useEffect } from "react";
import { imageData } from "./data";


const Con = React.createContext()

function Context (props) {
    function getItems(){
        return localStorage.getItem("cartArr") ? JSON.parse(localStorage.getItem("cartArr")) : []
    }

    const [all, setAll] = useState(imageData)
    const [cart, setCart] = useState(getItems())

    useEffect(()=> {
        localStorage.setItem("cartArr", JSON.stringify(cart))
    }, [cart])

    function toggleFav (id) {
        const newAll = all.map(item => {
            if(id === item.id){
                return {...item, isFav: !item.isFav}
            }
            return item
        })
        setAll(newAll)
    }

    function addToCart (newItem) {
        setCart(prev => {
            return [...prev, newItem]
        })
    }

    console.log(cart)

    function removeFromCart(id) {
        const newAll = cart.filter(item => {
            if (item.id !== id){
                return item
            }
        })
        setCart(newAll)
        localStorage.setItem("cartArr", JSON.stringify(cart))
    }

    function emptyCart() {
        setCart([])
    }

    return (
        <Con.Provider value={{all, toggleFav, addToCart, cart, removeFromCart, emptyCart}}>
            {props.children}
        </Con.Provider>
    )
}

export {Con, Context}