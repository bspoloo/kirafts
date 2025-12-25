import { useEffect, useState } from "react";
import Modal from '@mui/material/Modal';
import { Button } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { modalStyle } from "../constants/modal_style";
import { CompileButtonProps } from "../props/compile_button.prop";
import { Open_Sans } from "next/font/google";
import { messageChristmas } from "../constants/message_to_print";
import ChristmasAnme from "../../../public/christmas-anime.gif"
import { FaGithub, FaHome, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { messageWhatsapp } from "../constants/message_to_whatsapp";

const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
})

export default function Debug({ enabled }: CompileButtonProps) {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                if (e.key === "Enter") {
                    e.preventDefault();
                    e.stopPropagation();
                    handleClose();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown, true);
        return () => {
            document.removeEventListener("keydown", handleKeyDown, true);
        };
    }, [open]);

    return (
        <div>
            {
                enabled ?
                    <button className={`${openSans.className} bg-[#ffffe2] p-1.5 text-[#313235] font-semibold border-b-[3px] border-r-[3px] hover:bg-[#afaf83] transition-all`} onClick={handleOpen}>Compilar y Ejecutar</button> :
                    <span className={`${openSans.className} font-semibold text-[#ababab]`}>waiting code ...</span>
            }

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                // onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={modalStyle}>
                        <div className="flex flex-row justify-between items-center p-2 bg-[#dcd9d5] rounded-t-[10px]">
                            <div className="flex flex-row justify-center items-center gap-1">
                                <a href="https://github.com/bspoloo">
                                    <FaGithub size={24} color="#565a5b" />
                                </a>
                                <a href={`https://wa.me/59172612649?text=${messageWhatsapp}`}>
                                    <FaWhatsapp size={24} color="#565a5b" />
                                </a>
                                <a href="https://www.instagram.com/animetx098/">
                                    <FaInstagram size={24} color="#565a5b" />
                                </a>
                            </div>
                            <span className="text-[#565a5b] font-bold">Animetx - Consola de Ejecución</span>
                            <button className="flex justify-center items-center rounded-[5px] transition-all text-[#565a5b] font-bold w-5 h-5 hover:bg-[#565a5b] hover:text-[#dcd9d5]" onClick={handleClose}>x</button>
                        </div>
                        <div>
                            <div className=" flex flex-col p-2.5">
                                <span className="binary-title">{messageChristmas}</span>
                                <span className="binary-text">{"<< El programa ha finalizado: con codigo de salida: 0 >>"}</span>
                                <span className="binary-text">{"<< Presione Enter para cerrar esta ventana >>"}</span>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center w-full">
                            <img src={ChristmasAnme.src} alt="image anime" />
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}