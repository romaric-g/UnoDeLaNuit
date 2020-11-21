import Models from "../../../types/models";
import Player from "../Player";

class PlayerController {
   private player: Player;

   constructor(player: Player) {
      this.player = player;
   }

   joinRoom (params: Models.JoinRoomParams, callback: (res: Models.SocketResponse) => void) {
      if( params.code === "1234") {
         callback({
               success: true,
               message: "Connection reussite"
         })
      } else {
         callback({
            success: false,
            message: "La partie n'existe pas !"
         })
      }
   }

   createRoom (params: null, callback: (res: Models.CreateRoomResponse) => void) {
      callback({
         success: false,
         message: "not implemented"
      })
   }
   
   setRoomSetting (params: Models.SetRoomSettingParams, callback: (res: Models.SocketResponse) => void) {
      callback({
         success: true,
         message: "changes applied"
      })
   }

   getRoomSetting (params: null, callback: (res: Models.GetRoomSettingResponse) => void) {
      callback({
         success: true,
         message: "changes applied",
         settings: {
            public: true
         }
      })
   }

}

export default PlayerController;