import React from 'react';

interface Grind3x3Props {
    position: { x: number; y: number };
    size: { w: number; h: number };
}

export default function Controls({ position, size }: Grind3x3Props) {
    const cellWidth = size.w / 3;
    const cellHeight = size.h / 3;

    return (
        <div
            className="absolute z-10 pointer-events-auto"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${size.w}px`,
                height: `${size.h}px`,
            }}
        >
            {/* Grid container */}
            <div className="relative w-full h-full">
                {/* Líneas horizontales */}
                <div
                    className="absolute bg-gray-800"
                    style={{
                        top: `${cellHeight}px`,
                        width: '100%',
                        height: '2px',
                    }}
                />
                <div
                    className="absolute bg-gray-800"
                    style={{
                        top: `${cellHeight * 2}px`,
                        width: '100%',
                        height: '2px',
                    }}
                />

                {/* Líneas verticales */}
                <div
                    className="absolute bg-gray-800"
                    style={{
                        left: `${cellWidth}px`,
                        height: '100%',
                        width: '2px',
                    }}
                />
                <div
                    className="absolute bg-gray-800"
                    style={{
                        left: `${cellWidth * 2}px`,
                        height: '100%',
                        width: '2px',
                    }}
                />

                {/* Huesos en los 4 lados */}
                {/* Hueso superior */}
                <div
                    className="absolute bg-yellow-800 rounded-full"
                    style={{
                        left: '50%',
                        top: '-15px',
                        transform: 'translateX(-50%)',
                        width: '30px',
                        height: '10px',
                    }}
                />

                {/* Hueso inferior */}
                <div
                    className="absolute bg-yellow-800 rounded-full"
                    style={{
                        left: '50%',
                        bottom: '-15px',
                        transform: 'translateX(-50%)',
                        width: '30px',
                        height: '10px',
                    }}
                />

                {/* Hueso izquierdo */}
                <div
                    className="absolute bg-yellow-800 rounded-full"
                    style={{
                        top: '50%',
                        left: '-15px',
                        transform: 'translateY(-50%)',
                        width: '10px',
                        height: '30px',
                    }}
                />

                {/* Hueso derecho */}
                <div
                    className="absolute bg-yellow-800 rounded-full"
                    style={{
                        top: '50%',
                        right: '-15px',
                        transform: 'translateY(-50%)',
                        width: '10px',
                        height: '30px',
                    }}
                />

                {/* Círculos en los huesos (detalle) */}
                <div
                    className="absolute bg-yellow-600 rounded-full"
                    style={{
                        left: '50%',
                        top: '-15px',
                        transform: 'translateX(-50%)',
                        width: '10px',
                        height: '10px',
                    }}
                />
                <div
                    className="absolute bg-yellow-600 rounded-full"
                    style={{
                        left: '50%',
                        bottom: '-15px',
                        transform: 'translateX(-50%)',
                        width: '10px',
                        height: '10px',
                    }}
                />
                <div
                    className="absolute bg-yellow-600 rounded-full"
                    style={{
                        top: '50%',
                        left: '-15px',
                        transform: 'translateY(-50%)',
                        width: '10px',
                        height: '10px',
                    }}
                />
                <div
                    className="absolute bg-yellow-600 rounded-full"
                    style={{
                        top: '50%',
                        right: '-15px',
                        transform: 'translateY(-50%)',
                        width: '10px',
                        height: '10px',
                    }}
                />
            </div>
        </div>
    );
}