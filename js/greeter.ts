export default class Greeter {
    constructor(private name: string){}
    public greet(): void {
        console.log("Hello " + this.name);
    }
    public withdraw(): void {
        console.log("Farewell " + this.name);
    }
}