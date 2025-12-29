import { GrassProps } from "@/app/props/grass.prop";
import React from "react";


export default function Grass(grassProps: GrassProps) {
    return (
        <img
            src={grassProps.asset}
            alt={grassProps.name}
            width={grassProps.size.w}
            height={ grassProps.size.w}
            ref={grassProps.characterRef}
            className="border-[#7ba507] border-[5px] relative"
        />
    );
}
