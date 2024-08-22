import { Entity } from "@/@utils/entity";

export class Pagination extends Entity {
    public totalPage: number
    public maxRow: number
    public data: Array<object>

    public get pageCounter(): Array<number> {
        const map = []
        for (let i = 0; i < Number(this.totalPage); i++) {
            map.push(i)
        }
        
        return map
    }

    public get pageCounterBlog(): Array<number> {
        const map = []
        for (let i = 1; i < Number(this.totalPage); i++) {
            map.push(i)
        }

        return map
    }

    public getStartNumber(currentPage: number): number {
        return (Number(currentPage) * Number(this.maxRow)) + 1
    }
}