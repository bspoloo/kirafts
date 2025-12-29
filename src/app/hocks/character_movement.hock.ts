import { RefObject, useEffect, useRef } from "react";

export function useCharacterMovement(
    characterRef: RefObject<HTMLImageElement | null>,
    positionRef: RefObject<{ x: number; y: number }>,
    worldRef: RefObject<HTMLDivElement | null>,
    velocityRef: RefObject<{ x: number; y: number }>,
    isMoving: boolean
) {
    const animationRef = useRef<number | null>(null);
    const space: number = 0.1;
    useEffect(() => {
        if (!isMoving) {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
                animationRef.current = null;
            }
            return;
        }

        const animate = () => {
            if (!isMoving) return;
            if (!worldRef.current) return;

            const width = worldRef.current?.offsetWidth-70;
            const heigth = worldRef.current?.offsetHeight-100;

            if (positionRef.current.x >= width) {
                positionRef.current.x += -space;
            } else if (positionRef.current.y >= heigth) {
                positionRef.current.y += -space;
            } else if (positionRef.current.x <= 0) {
                positionRef.current.x += space;
            } else if (positionRef.current.y <= 0) {
                positionRef.current.y += space;
            } else {
                positionRef.current.x += velocityRef.current.x;
                positionRef.current.y += velocityRef.current.y;
            }

            if (characterRef.current) {
                characterRef.current.style.transform =
                    `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
                animationRef.current = null;
            }
        };
    }, [isMoving]);
}
