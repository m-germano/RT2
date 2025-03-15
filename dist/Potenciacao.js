import Calculo from "./Calculo";
export default class Potenciacao extends Calculo {
    calcular(number1, number2) {
        return Math.pow(number1, number2);
    }
}
