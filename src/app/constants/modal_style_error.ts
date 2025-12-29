import { SxProps, Theme } from "@mui/material";

export const modalStyleError: SxProps<Theme> = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    width: '80%',
    maxWidth: 720,
    minWidth: 320,

    bgcolor: '#90d5ca',
    color: '#c9d1d9',

    border: '5px solid #409fcb',
    borderRadius: '15px',

    boxShadow: '0 20px 60px rgba(0,0,0,0.8)',

    fontFamily: `'JetBrains Mono', monospace`,
    fontSize: '14px',
    lineHeight: 1.6,

    // p: 3,
    // gap: "20px",

    display: 'flex',
    flexDirection: 'column',
};
