import React from "react";
import Image from "../components/image";
import { Con } from "../context";
import { useContext, useState } from "react";

function Photos () {
    const {all} = useContext(Con)

    const ImageElements = all.map(item => {
        return <Image key={item.id}  item={item}/>
    })

    return (
        <article className="angry-grid grid w-full grid-cols-3 md:">
                {ImageElements}
        </article>
    )
}

export{ Photos }