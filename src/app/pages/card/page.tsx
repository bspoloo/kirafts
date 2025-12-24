import ChristmasTree from "@/app/components/christmas_tree";
import Message from "@/app/components/message";
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
        <div className="flex min-h-screen items-center justify-center bg-[#3f3f47] font-sans ">
            <main className="flex min-h-screen  flex-col items-center justify-between">
                <div className="flex flex-col flex-wrap justify-center items-center">
                    <div className="">
                        <ChristmasTree></ChristmasTree>
                    </div>
                    <div className="message-box">
                        <Message></Message>
                    </div>
                </div>
            </main>
        </div>
    );
}
