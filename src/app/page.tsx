import Image from "next/image";
import GuraImage from "../../public/gawr-gura-gura.gif";
// export const modalStyle: SxProps<Theme> = {
//     position: 'absolute' as const,
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',

//     width: '80%',
//     maxWidth: 720,
//     minWidth: 320,

//     bgcolor: '#0f1117',
//     color: '#c9d1d9',

//     border: '1px solid #30363d',
//     borderRadius: '10px',

//     boxShadow: '0 20px 60px rgba(0,0,0,0.8)',

//     fontFamily: `'JetBrains Mono', monospace`,
//     fontSize: '14px',
//     lineHeight: 1.6,

//     // p: 3,
//     // gap: "20px",

//     display: 'flex',
//     flexDirection: 'column',
// };


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#e3e1e2] font-sans ">
      <main className="flex min-h-screen flex-col items-center justify-between py-32 px-16">
        <div className="flex flex-col gap-2.5 justify-center items-center p-2.5  top-1/2 left-1/2  w-[80%] max-w-180 min-w-[320px] bg-[#0f1117] text-[#c9d1d9] border border-[#30363d] rounded-[10px] shadow-[0_20px_60px_rgba(0,0,0,0.8)] font-mono text-[14px] leading-[1.6]">
          <span className="binary-title">Aqui deberia ir algo xd</span>
          <img src={GuraImage.src} alt="gura image" />
          <span className="binary-title">Created by animetx</span>
        </div>
      </main>
    </div>
  );
}
