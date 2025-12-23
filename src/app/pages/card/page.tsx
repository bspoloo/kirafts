import ChristmasTree from "@/app/components/christmas_tree";
import { Orbitron } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";

const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["400", "600", "700"]
});

const mono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "600", "700"]
});

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#212529] font-sans ">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
                <div className="flex flex-col flex-wrap justify-center items-center">
                    <div className="">
                        <ChristmasTree></ChristmasTree>
                    </div>
                    <div className="message-box flex flex-col justify-center items-center gap-7">
                        <div className={`${orbitron.className} binary-title`}>
                            FELIZ NAVIDAD
                        </div>
                        <div className={`${mono.className} binary-text`}>
                            En esta época de luz y esperanza, celebremos los momentos que unen corazones y llenan de alegría cada rincon
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
