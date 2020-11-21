import Pool from "./Pool";

class PoolManager {
    public pools: Pool[]

    constructor() {
        this.pools = [];
    }
}

export default new PoolManager()