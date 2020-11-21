"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = __importDefault(require("./App"));
var port = process.env.PORT || 4000;
App_1.default.http.listen(port, function () {
    console.log("server is listening on " + port);
});
App_1.default.mountSocket();
//# sourceMappingURL=index.js.map