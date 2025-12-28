"use client";

import { useEffect, useState } from "react";
import Modal from '@mui/material/Modal';
import { Button } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Open_Sans } from "next/font/google";
import ChristmasAnme from "../../../public/christmas-anime.gif"
import { FaGithub, FaHome, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ModalProps } from "@/app/props/modal.prop";
import { modalStyleError } from "@/app/constants/modal_style_error";
import { Press_Start_2P } from "next/font/google";

const arcade = Press_Start_2P({
    subsets: ["latin"],
    weight: "400",
});
export default function MessageError(errorProps: ModalProps) {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        // <button className={`${openSans.className} bg-[#ffffe2] p-1.5 text-[#313235] font-semibold border-b-[3px] border-r-[3px] hover:bg-[#afaf83] transition-all`} onClick={handleOpen}>Compilar y Ejecutar</button> :
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={errorProps.isOpen}
            // onClose={handleClose}
            onClose={errorProps.isOpen ? handleClose : undefined}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={errorProps.isOpen}>
                <Box sx={modalStyleError}>
                    <div className={`${arcade.className} flex flex-row justify-between items-center p-2 gap-1.5`}>
                        <div className="flex flex-row gap-1">
                            <div className="w-3.75 h-3.75 rounded-full bg-[#ff5f57]"></div>
                            <div className="w-3.75 h-3.75 rounded-full bg-[#febc2e]"></div>
                            <div className="w-3.75 h-3.75 rounded-full bg-[#28c840]"></div>
                        </div>
                        {/* <span className="text-[#565a5b] font-bold text-center">Error</span> */}

                        {errorProps.cancel ?
                            <button className="flex justify-center items-center rounded-[5px] transition-all text-[#565a5b] font-bold w-5 h-5 hover:bg-[#565a5b] hover:text-[#dcd9d5]" onClick={handleClose}>x</button>
                            : <div></div>
                        }

                    </div>
                    <div className={`${arcade.className} flex flex-col justify-center items-center text-center p-5 gap-2 bg-[#ffe2ba] m-5 rounded-[15px] border-[5px] border-[#409fcb]`}>
                        <div className=" flex flex-col justify-center items-center text-[20px]">
                            <span className="text-[#409fcb]">{errorProps.message}</span>
                        </div>
                        <img src={errorProps.image} alt="turn-phone.gift" width={80} />
                    </div>

                    <div className="flex flex-row justify-center items-center">

                        {errorProps.confirm ?
                            <button className="flex justify-center items-center rounded-[5px] transition-all text-[#565a5b] font-bold w-5 h-5 hover:bg-[#565a5b] hover:text-[#dcd9d5]" onClick={errorProps.confirm.action}>{errorProps.confirm.context}</button>
                            : <div></div>
                        }
                        {errorProps.cancel ?
                            <button className="flex justify-center items-center rounded-[5px] transition-all text-[#565a5b] font-bold w-5 h-5 hover:bg-[#565a5b] hover:text-[#dcd9d5]" onClick={handleClose}>{errorProps.cancel.context}</button>
                            : <div></div>
                        }
                    </div>
                </Box>
            </Fade>
        </Modal>
    );
}