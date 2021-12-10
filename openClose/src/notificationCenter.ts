import User from "./user";

export default class NotificationCenter {

    constructor(private user: User, private message: string) {
    }

    notifyByEmail(){
        console.log(`Notify by email to ${this.user.name} message: ${this.message}...`);
    }

    notifyBySms(){
        console.log(`Notify by SMS to ${this.user.name} message: ${this.message}...`);
    }

    // //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // notifyByFacebook(){
    //     console.log(`Notify by Facebook to ${this.user.name} message: ${this.message}...`);
    // }

    // 100 diferentes tipos de notificacion (){
    //     console.log(`Notify by Facebook to ${this.user.name} message: ${this.message}...`);
    // }
}