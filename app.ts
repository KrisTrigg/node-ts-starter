import Greeter from './js/greeter';

console.log("Should build and then run with F5")

let greeter = new Greeter("World");
greeter.greet();
greeter.withdraw();

process.exit();