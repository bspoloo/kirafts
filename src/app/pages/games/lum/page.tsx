"use client";
import MessageError from "@/app/components/modals/message_error";
import { modalStyleError } from "@/app/constants/modal_style_error";
// import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import TurnPhone from "../../../../../public/rotate-screen.gif";
import { useEffect, useState } from "react";
import RPGWorld from "@/app/components/game/rpg_world";

export default function LumBirthday() {
    // const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [mounted, setMounted] = useState<boolean>(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className=" flex justify-center items-center w-full h-svh">
            {isMobile ? (
                <MessageError
                    message="Rote su celular"
                    style={modalStyleError}
                    image={TurnPhone.src}
                    onClose={false}
                    isOpen={true}
                />
            ) : (
                <RPGWorld></RPGWorld>
            )}
        </div>
    );
}