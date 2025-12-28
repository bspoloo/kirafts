import { SxProps, Theme } from "@mui/material";

export const modalStyleDebug: SxProps<Theme> = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    width: '80%',
    maxWidth: 720,
    minWidth: 320,

    bgcolor: '#0f1117',
    color: '#c9d1d9',

    border: '1px solid #30363d',
    borderRadius: '10px',

    boxShadow: '0 20px 60px rgba(0,0,0,0.8)',

    fontFamily: `'JetBrains Mono', monospace`,
    fontSize: '14px',
    lineHeight: 1.6,

    // p: 3,
    // gap: "20px",

    display: 'flex',
    flexDirection: 'column',
};
