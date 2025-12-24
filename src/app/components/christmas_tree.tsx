"use client";

import { use, useEffect, useRef, useState } from "react"
import { Tree } from "../classes/tree.class"

export default function ChristmasTree() {
    const [tree, setTree] = useState<Tree>();
    const leavesRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        leavesRef.current = [];
    }, [tree]);

    useEffect(() => {
        setTree(new Tree(10, 1));
    }, []);

    useEffect(() => {
        if (!tree) return;

        const interval = setInterval(() => {
            const elements: number[] = [];
            const totalLeaves: number = leavesRef.current.length;

            for (let i = 0; i < Math.min(30, totalLeaves); i++) {
                const randomElement = Math.floor(Math.random() * totalLeaves);
                elements.push(randomElement);
            }

            leavesRef.current.forEach((el) => {
                if (el) {
                    el.classList.add("binary-number-green");
                    el.classList.remove("binary-number-red");
                }
            });

            elements.forEach((element => {
                const leaveRef = leavesRef.current[element];
                if (leaveRef) {
                    leaveRef.classList.add("binary-number-red")
                    leaveRef.classList.remove("binary-number-green");
                } else {
                    console.log(`no existe ${element}`);
                }
            }));

        }, 1000);

        return () => clearInterval(interval);
    }, [tree]);

    if (!tree) return null;
    return <div className="container-tree">
        {
            tree.getLeaves().map((leaves, i) =>
                <div key={`${i}`} className="flex flex-row justify-center items-center">
                    {
                        leaves.map((leave, j) =>
                            <div key={`${i}-${j}`} className="binary-number-green" ref={(el) => {
                                if (el && !leavesRef.current.includes(el)) {
                                    leavesRef.current.push(el);
                                }
                            }}>
                                {leave}
                            </div>
                        )
                    }
                </div>
            )
        }
        {
            tree.getLong().map((longs, i) =>
                <div key={`${i}`} className="flex flex-row justify-center items-center">
                    {
                        longs.map((long, j) =>
                            <div key={`${i}-${j}`} className="binary-number-green">
                                {long}
                            </div>
                        )
                    }
                </div>
            )
        }
    </div>
}