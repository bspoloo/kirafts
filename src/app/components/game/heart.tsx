import { HeartProps } from "@/app/props/heart.prop";


export default function Heart(heartProps: HeartProps) {
    return(
        <img src={heartProps.asset} alt="heart.png" style={{
            width: `${heartProps.width}px`,
            height: `${heartProps.heigth}px`,
        }} />
    )
}