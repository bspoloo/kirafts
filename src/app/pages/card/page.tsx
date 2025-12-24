"use client";

import ChristmasTree from "@/app/components/christmas_tree";
import Debug from "@/app/components/debug";
import Message from "@/app/components/message";
import { Orbitron } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { useState } from "react";

const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["400", "600", "700"]
});

const mono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "600", "700"]
});

export default function Home() {
    const [enabled, setEnabled] = useState<boolean>(false);
    const handleButton = () => {
        setEnabled(true);
    }
    return (
        <div className="flex min-h-screen items-center justify-center font-sans ">
            <main className="flex min-h-screen  flex-col items-center justify-between">
                <div className="flex flex-col flex-wrap justify-center items-center gap-5">
                    <div className="flex flex-col">
                        <ChristmasTree></ChristmasTree>
                    </div>
                    <div className="message-box">
                        <Message enableButton={handleButton}></Message>
                    </div>
                    <div>
                        <Debug enabled={enabled}></Debug>
                    </div>
                </div>
            </main>
        </div>
    );
}
