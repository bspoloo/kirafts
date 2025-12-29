import { SxProps, Theme } from "@mui/material";

export type ModalProps = {
    message: string,
    style: SxProps<Theme>,
    confirm?: {context: string, action: () => void},
    cancel?: {context: string},
    image: string,
    isOpen: boolean
    onClose: boolean,
}