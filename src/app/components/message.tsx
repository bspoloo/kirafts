"use client";

import { JetBrains_Mono, Orbitron } from "next/font/google"
import { RefObject, useEffect, useRef, useState } from "react";

const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["400", "600", "700"]
});

const mono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "600", "700"]
});

export default function Message() {

    const message: string = "En esta época de luz y esperanza, celebremos los momentos que unen corazones y llenan de alegría cada rincon."
    const messageRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const countRef = useRef<number>(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const hasStarted = useRef<boolean>(false);

    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        if (messageRef.current) {
            messageRef.current.innerHTML = "";
        }

        hasStarted.current = false;

        if (!hasStarted.current) {
            hasStarted.current = true;
            intervalRef.current = setInterval(() => {
                if (countRef.current >= message.length) {
                    clearInterval(intervalRef.current!);
                    return;
                }
                if (messageRef.current) {
                    messageRef.current.innerHTML += message[countRef.current];
                }
                countRef.current++;
            }, 100);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [message]);

    return <>
        <div className={`${orbitron.className} binary-title`}>
            FELIZ NAVIDAD
        </div>
        <div className={`${mono.className} binary-text`} ref={messageRef}>
            {/* message here */}
        </div>
    </>
}