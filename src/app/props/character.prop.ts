import { RefObject } from "react"

export type CharacterProps = {
    name: string
    position: { x: number, y: number }
    size: { w: number, h?: number }
    worldRef: RefObject<HTMLDivElement | null>
}