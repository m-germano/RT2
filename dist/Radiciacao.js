import Calculo from "./Calculo";
export default class Radiciacao extends Calculo {
    calcular(number1, number2) {
        return Math.pow(number1, 1 / number2);
    }
}
