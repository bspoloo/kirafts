import { CharacterProps } from "@/app/props/character.prop";
import { useEffect, useRef, useState } from "react";
import AssetLumIddle from "../../../../public/character/iddle.gif"
import AssetLumWalk from "../../../../public/character/walk.gif"
import { useCharacterMovement } from "@/app/hocks/character_movement.hock";
import { movement, valueRun } from "@/app/constants/movements";
import { Keys } from "@/app/enums/keys.enum";
import Controls from "./controls";

export default function CharacterLum(characterProps: CharacterProps) {

    const characterRef = useRef<HTMLImageElement>(null);
    const pos = useRef<{ x: number, y: number }>({ x: characterProps.position.x, y: characterProps.position.y });
    const velocity = useRef<{ x: number, y: number }>({ x: valueRun, y: valueRun });
    const [isMoving, setIsMoving] = useState(false);
    const assetRef = useRef<string>(AssetLumIddle.src);
    useCharacterMovement(characterRef, pos, characterProps.worldRef, velocity, isMoving);

    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (!characterRef.current) return;

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        console.log('El personaje está sobre:', entry.target);
                        if (entry.target.getAttribute('alt') === 'grass') {
                            console.log('¡Estás sobre un pasto!');
                        }
                    }
                });
            },
            {
                root: characterProps.worldRef.current,
                threshold: 0.2,
            }
        );

        const grasses = characterProps.worldRef.current?.querySelectorAll('img[alt="grass"]');
        grasses?.forEach(grass => {
            observerRef.current?.observe(grass);
        });

        return () => {
            observerRef.current?.disconnect();
        };
    }, []);

    useEffect(() => {

        if (!open) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            assetRef.current = AssetLumWalk.src;
            if (e.key === Keys.W || e.key === Keys.ARROW_UP) {
                if (e.key === Keys.W || e.key === Keys.ARROW_UP) {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsMoving(true);
                    velocity.current.x = movement.UP.x
                    velocity.current.y = movement.UP.y
                }
            }
            if (e.key === Keys.S || e.key === Keys.ARROW_DOWN) {
                if (e.key === Keys.S || e.key === Keys.ARROW_DOWN) {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsMoving(true);
                    velocity.current.x = movement.DOWN.x
                    velocity.current.y = movement.DOWN.y
                }
            }
            if (e.key === Keys.D || e.key === Keys.ARROW_RIGHT) {
                if (e.key === Keys.D || e.key === Keys.ARROW_RIGHT) {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsMoving(true);
                    velocity.current.x = movement.RIGHT.x
                    velocity.current.y = movement.RIGHT.y
                }
            }
            if (e.key === Keys.A || e.key === Keys.ARROW_LEFT) {
                if (e.key === Keys.A || e.key === Keys.ARROW_LEFT) {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsMoving(true);
                    velocity.current.x = movement.LEFT.x
                    velocity.current.y = movement.LEFT.y
                }
            }
        };
        const handleKeyUp = (e: KeyboardEvent) => {
            const value = e.key as Keys;
            if (Object.values(Keys).includes(value)) {
                if (Object.values(Keys).includes(value)) {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsMoving(false);
                    assetRef.current = AssetLumIddle.src;
                    velocity.current.x = 0
                    velocity.current.y = 0
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown, true);
        document.addEventListener("keyup", handleKeyUp, true);
        return () => {
            document.removeEventListener("keydown", handleKeyDown, true);
            document.removeEventListener("keyup", handleKeyUp, true);
        };
    }, [open]);


    return (
        <div>
            {/* <Controls
                position={{ x: 0, y: 0 }}
                size={{ w: 300, h: 300 }}
            ></Controls> */}
            <img
                src={assetRef.current}
                alt={characterProps.name}
                width={characterProps.size.w}
                height={characterProps.size.h ? characterProps.size.h : characterProps.size.w}
                ref={characterRef}
                className="absolute z-10 pointer-events-auto" />
        </div>
    )
}