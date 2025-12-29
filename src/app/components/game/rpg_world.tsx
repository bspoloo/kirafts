import { useEffect, useRef } from "react"
import CharacterLum from "./character_lum"
import { RPGWorldProps } from "@/app/props/rpg_world.prop";
import Grass from "./ground";
import GrassImage from "../../../../public/objects/grass.jpg";
import GroundImage from "../../../../public/objects/ground.png";
import Controls from "./controls";
export default function RPGWorld(rpgWorldProps: RPGWorldProps) {
    const worldRef = useRef<HTMLDivElement>(null);

    return (
        <div className={`relative bg-[#c8d65c] border-8 border-[#9e6d3b] rounded-2xl overflow-hidden`} ref={worldRef} style={{
            width: `${rpgWorldProps.width}px`,
            height: `${rpgWorldProps.height}px`,
        }}>
            <CharacterLum
                name="Lum"
                position={{ x: 0, y: 0 }}
                size={{ w: 70 }}
                worldRef={worldRef}
            ></CharacterLum>
            <div className="flex flex-row flex-wrap w-full h-full">
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
                <Grass asset={GrassImage.src} name="grass" position={{ x: 0, y: 0 }} size={{ w: 98.2, h: 300 }}></Grass>
            </div>
        </div>

    )
}