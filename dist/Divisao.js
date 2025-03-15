import Calculo from "./Calculo";
export default class Divisao extends Calculo {
    calcular(number1, number2) {
        if (number2 === 0) {
            throw new Error("Não é possível dividir por zero");
        }
        return number1 / number2;
    }
}
