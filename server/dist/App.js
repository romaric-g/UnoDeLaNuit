"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var cors_1 = __importDefault(require("cors"));
var App = /** @class */ (function () {
    function App() {
        this.express = express_1.default();
        this.express.use(cors_1.default());
        this.http = http_1.default.createServer(this.express);
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        this.io = require('socket.io')(this.http, { origins: '*:*' });
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        var router = express_1.default.Router();
        router.get('/', function (req, res) {
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
    };
    App.prototype.mountSocket = function () {
        console.log('mountSocket');
        this.io.on('connection', function () {
            console.log('a user connected');
        });
    };
    return App;
}());
exports.default = new App();
//# sourceMappingURL=App.js.map