class AutoPause {
    constructor() {
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handlerVisivilityChange = this.handlerVisivilityChange.bind(this);
    }
    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold,
        });
        observer.observe(this.player.media);
        document.addEventListener("visibilitychange", this.handlerVisivilityChange);
    }
    handlerIntersection(entries) {
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= this.threshold;
        if (isVisible) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
        console.log(entry);
    }
    handlerVisivilityChange() {
        const isVisible = document.visibilityState === "visible";
        if (isVisible) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    }
}
export default AutoPause;
