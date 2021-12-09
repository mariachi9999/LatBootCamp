export default abstract class MobileDevice {

    constructor(protected model: string, private brand: string) {

    }

    showBrand() {
        console.log(`model: ${this.brand} brand: ${this.brand}`)
    }

    abstract displayApplication(): void;

    abstract watchVideo(url);
    abstract watchVideo(path: string);
    abstract watchVideo(path: string, subTiltesFile: string);

}