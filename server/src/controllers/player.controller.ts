import Modeles from "../../../types/models";

const PlayerController = {

   createRoomResponse: (createRoomResponse: Modeles.CreateRoomResponse) : string => {
        return createRoomResponse.code;
   }
}

export default PlayerController;