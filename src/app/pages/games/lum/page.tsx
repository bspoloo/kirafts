"use client";
import MessageError from "@/app/components/modals/message_error";
import { modalStyleError } from "@/app/constants/modal_style_error";
// import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import TurnPhone from "../../../../../public/rotate-screen.gif";
import DesktopImage from "../../../../../public/desktop.png";
import { useEffect, useRef, useState } from "react";
import RPGWorld from "@/app/components/game/rpg_world";
import { IHeart } from "@/app/interfaces/heart.interface";
import HeartImage from "../../../../../public/objects/heart.png";
import Heart from "@/app/components/game/heart";
import Controls from "@/app/components/game/controls";
import { Press_Start_2P } from "next/font/google";

const arcade = Press_Start_2P({
    subsets: ["latin"],
    weight: "400",
});

export default function LumBirthday() {
    // const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [mounted, setMounted] = useState<boolean>(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const lives = useRef<number>(5);
    const [hearts, setHearts] = useState<IHeart[]>(() => {
        const hearts: IHeart[] = []
        for (let i = 0; i < lives.current; i++) {
            hearts.push({ asset: HeartImage.src, width: 50, heigth: 50 });
        }
        return hearts;
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className=" flex justify-center items-center w-full h-svh">
            {isMobile ? (
                <MessageError
                    message="Use el modo escritorio en celular"
                    style={modalStyleError}
                    image={DesktopImage.src}
                    onClose={false}
                    isOpen={true}
                />
            ) : (
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="flex flex-row justify-center items-center gap-2 bg-[#c1dd6b] p-2 rounded-4xl">
                        <span className={`${arcade.className} text-center flex flex-row justify-between items-center p-2 gap-1.5 text-[#b86f50] text-[20px]`}> vidas == {lives.current}</span>
                        {
                            hearts.map((heart, index) => <Heart key={index + 1} asset={heart.asset} width={heart.width} heigth={heart.heigth}></Heart>)
                        }
                    </div>
                    <div className="w-225">
                        <span className={`${arcade.className} text-center flex flex-row justify-between items-center p-2 gap-1.5 text-[#b86f50] text-[20px]`}> Feliz cumple, pasala bien, y el juego aun ta imcompleto xd</span>
                    </div>
                    <RPGWorld width={900} height={700}></RPGWorld>
                </div>
            )}
        </div>
    );
}