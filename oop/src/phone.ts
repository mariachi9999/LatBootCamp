import MobileDevice from "./mobileDevice";

export default class Phone extends MobileDevice implements Playable {

    watchVideo(url: any);
    watchVideo(path: string);
    watchVideo(path: string, subTiltesFile: string);
    watchVideo(path: any, subTiltesFile?: any): any {
        throw new Error("Method not implemented.");
    }

    constructor(model: string, brand: string) {
        super(model, brand);
    }

    play(): void {
        console.log(`playing with phone ${this.model}`);
    }

    displayApplication(): void {
        console.log('Showing for phone');
    }
}