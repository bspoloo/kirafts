import { RefObject } from "react"

export type GrassProps = {
    name: string
    position: { x: number, y: number }
    asset: string
    size: { w: number, h?: number }
    characterRef?: RefObject<HTMLImageElement | null>
}