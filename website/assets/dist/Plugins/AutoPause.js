//"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
var AutoPause = /** @class */ (function () {
    function AutoPause() {
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handlerVisivilityChange = this.handlerVisivilityChange.bind(this);
    }
    AutoPause.prototype.run = function (player) {
        this.player = player;
        var observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold,
        });
        observer.observe(this.player.media);
        document.addEventListener("visibilitychange", this.handlerVisivilityChange);
    };
    AutoPause.prototype.handlerIntersection = function (entries) {
        var entry = entries[0];
        var isVisible = entry.intersectionRatio >= this.threshold;
        if (isVisible) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
        console.log(entry);
    };
    AutoPause.prototype.handlerVisivilityChange = function () {
        var isVisible = document.visibilityState === "visible";
        if (isVisible) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    };
    return AutoPause;
}());
const _default = AutoPause;
export { _default as default };
