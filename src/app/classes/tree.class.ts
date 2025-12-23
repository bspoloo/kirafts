import { ITree } from "../interfaces/tree.interface";

export class Tree implements ITree {
    private leaves: number;
    private long: number;
    constructor(leaves?: number, long?: number) {
        this.leaves = leaves ?? 10;
        this.long = long ?? 1
    }

    //return a binary random between in 0 and 1
    private getBinaryRandom(): number {
        return Math.floor(Math.random() * 2);
    }

    public getLeaves(): number[][] {
        let counter: number = 1;
        const binaries: number[][] = [];
        for (let i = 0; i < this.leaves; i++) {
            const container: number[] = []
            for (let j = 0; j < counter; j++) {
                container.push(this.getBinaryRandom());
            }
            binaries.push(container);
            counter += 2;
        }
        return binaries;
    }
    
    public getLong(): number[][] {
        const binaries: number[][] = [];
        for (let i = 0; i < this.long; i++) {
            const container: number[] = []
            for (let j = 0; j < 3; j++) {
                container.push(this.getBinaryRandom());
            }
            binaries.push(container);
        }
        return binaries;
    }
}