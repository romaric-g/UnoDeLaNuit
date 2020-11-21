import Pool from "./Pool";


export default class Player {
    public id: string;
    public name: string | undefined;
    public pool: Pool | null;

    constructor(id: string) {
        this.id = id;
        this.name = undefined;
        this.pool = null;
    }

    setName(name: string) : void {
        this.name = name;
    }

    setPool(pool: Pool | null) : void {
        this.pool = pool;
    }
}