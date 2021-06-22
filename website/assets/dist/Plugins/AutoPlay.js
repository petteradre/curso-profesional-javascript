//"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
var AutoPlay = /** @class */ (function () {
    function AutoPlay() {
    }
    AutoPlay.prototype.run = function (player) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        player.play();
    };
    return AutoPlay;
}());
const _default = AutoPlay;
export { _default as default };
