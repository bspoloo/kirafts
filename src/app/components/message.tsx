"use client";

import { JetBrains_Mono, Open_Sans, Orbitron, Poppins } from "next/font/google"
import { RefObject, useEffect, useRef, useState } from "react";
import { MessagePrint } from "../interfaces/message_print.interface";
import { messageToPrint } from "../constants/message_to_print";

const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["400", "600", "700"]
});

const mono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "600", "700"]
});

const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
})

const poppins = Poppins({
    weight: ['400', '600'],
    subsets: ['latin'],
    display: 'swap',
})

export default function Message() {

    const messageRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const countRef = useRef<number>(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const hasStarted = useRef<boolean>(false);
    const isHidden = useRef<boolean>(false);
    const editRef = useRef<HTMLDivElement>(null);
    const messageList: MessagePrint[] = messageToPrint;
    let messageIndex = 0;

    useEffect(() => {

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        if (messageRef.current) {
            messageRef.current.innerHTML = "";
        }

        hasStarted.current = false;

        const printMessage = () => {
            if (messageIndex >= messageList.length) return;
            const currentMessage = messageList[messageIndex];
            const span: HTMLSpanElement = document.createElement("span");
            // span.textContent = "A";
            span.style.color = currentMessage.color;
            messageRef.current?.appendChild(span);

            intervalRef.current = setInterval(() => {
                if (countRef.current >= currentMessage.message.length) {
                    
                    clearInterval(intervalRef.current!);

                    countRef.current = 0;
                    messageIndex++;
                    printMessage();
                    return;
                }
                if (messageRef.current) {
                    span.innerHTML += currentMessage.message[countRef.current];
                }
                countRef.current++;
            }, 100);
        }
        if (!hasStarted.current) {
            hasStarted.current = true;
            printMessage();
        }
    }, [messageToPrint]);

    useEffect(() => {
        const interval = setInterval(() => {
            if(editRef.current){
                editRef.current.hidden = !isHidden.current;
                isHidden.current = !isHidden.current;
            }
        }, 200);

        return () => {
            clearInterval(interval!);
        }
    });
    return <>
        <div className={`${openSans.className} flex flex-row justify-between items-center w-full bg-[#252525] p-2.5 text-[#8d929b] rounded-t-[10px] font-bold`}>
            <div className="flex flex-row gap-1">
                <div className="w-3.75 h-3.75 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3.75 h-3.75 rounded-full bg-[#febc2e]"></div>
                <div className="w-3.75 h-3.75 rounded-full bg-[#28c840]"></div>
            </div>
            feliz_navidad.cpp
        </div>
        <div className="flex flex-col p-5 text-[15px]">
            <div className="flex flex-row gap-2">
                <span className={`${openSans.className} font-semibold text-[#b37bae]`}>#include</span>
                <span className={` text-[#cc9077]`}>{"<iostream>"}</span>
            </div>

            <div className="flex flex-row gap-2">
                <span className={`${openSans.className} font-semibold text-[#b37bae]`}>using</span>
                <span className={`${openSans.className} font-semibold text-[#5394cb]`}>namespace</span>
                <span className={`${openSans.className} font-semibold text-[#47b09a]`}>std;</span>
            </div>

            <div className="flex flex-row gap-2">
                <span className={`${openSans.className} font-semibold text-[#5394cb]`}>int</span>
                <div className="flex flex-row">
                    <span className={`${openSans.className} font-semibold text-[#c6c69a]`}>main</span>
                    <span className={`${openSans.className} font-semibold text-[#ababab]`}>()</span>
                </div>
                <span className={`${openSans.className} font-semibold text-[#ababab]`}>{"{"}</span>
            </div>
            <div className={`${openSans.className} font-semibold text-[#ababab] ml-7`} ref={messageRef}>
                {/* message here */}
                <div className="w-0.5 h-4.5 bg-[#89898a]" ref={editRef}></div>
            </div>
            <div className="flex flex-row gap-2 items-center ml-7">
                <span className={`${openSans.className} font-semibold text-[#b37bae]`}>return</span>
                <span className={`${openSans.className} font-semibold text-[#aac09d]`}>0;</span>
            </div>
            <span className={`${openSans.className} font-semibold text-[#ababab]`}>{"}"}</span>
        </div>

        <div className={`${openSans.className} flex flex-row justify-end items-center w-full p-2.5 text-white text-[10px] rounded-t-[10px] font-semibold`}>
            by Animetx
        </div>
    </>
}