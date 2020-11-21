import Player from "./Player";


export default class Pool {
    private players: Player[]

    constructor() {
        this.players = []
    }

    join(player: Player) : void {
        this.players.push(player);
        player.setPool(this);
    }

    leave(player: Player) : void {
        this.players = this.players.filter((p) => p != player)
        player.setPool(null);
    }

}