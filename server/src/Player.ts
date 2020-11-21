import Models from "../../types/models";
import PlayerController from "./controllers/PlayerController";
import Pool from "./Pool";


export default class Player {
    private socket: any;

    public id: string;
    public name: string | undefined;
    public pool: Pool | null;

    constructor(socket: any) {
        this.socket = socket;
        this.id = socket.id;
        this.name = undefined;
        this.pool = null;

        const playerController = new PlayerController(this);

        this.socket.on('JoinRoom', playerController.joinRoom);
        this.socket.on('CreateRoom', playerController.createRoom);
        this.socket.on('SetRoomSetting', playerController.setRoomSetting)
        this.socket.on('GetRoomSetting', playerController.getRoomSetting)
    }

    setName(name: string) : void {
        this.name = name;
    }

    setPool(pool: Pool | null) : void {
        this.pool = pool;
    }
}