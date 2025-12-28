import { useEffect, useRef } from "react"
import Character from "../../../../public/character/character.gif"

export default function RPGWorld() {

    const characterRef = useRef<HTMLImageElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const pos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        let animationId: number;

        const animate = () => {
            pos.current.x += 0.1;
            pos.current.y += 0.1;

            if (characterRef.current) {
                characterRef.current.style.transform =
                    `translate(${pos.current.x}px, ${pos.current.y}px)`;
            }

            animationId = requestAnimationFrame(animate);
            return () => cancelAnimationFrame(animationId);
        };

        animate();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center bg-[#c8d65c] w-[95%] h-[95%] border-8 border-[#9e6d3b] rounded-2xl p-2">
            <img src={Character.src} alt="character" width={50} ref={characterRef} className="relative" />
        </div>
    )
}