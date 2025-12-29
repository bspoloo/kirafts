export const valueRun : number = 3;
export const movement = {
    UP: {x: 0, y: -valueRun},
    DOWN: {x: 0, y: valueRun},
    RIGHT: {x: valueRun, y: 0},
    LEFT: {x: -valueRun, y: 0}
} as const;