import util from "../util/util";

/**
 * Singleton pattern.
 * 
 * @name RavenCarousel
 */

class RavenCarousel {
    constructor() {
        if (!RavenCarousel.instance) {
            this.executeInstance();
        }

        return this;
    }
    executeInstance() {
        
    }
}

const instance = new RavenCarousel();

export default instance;