import {CalculatorStrategy} from "../../../CalculatorStrategy";

type HeatingEnergy = { electricity: number, fuel: number };
type ClimaticZoneCoefficients = { H1: HeatingEnergy, H2: HeatingEnergy, H3: HeatingEnergy };
type CalculationParams = { nbWindows: number, zone: string, energyType: string };

export class V1 implements CalculatorStrategy {
    private readonly coefficients: ClimaticZoneCoefficients = {
        H1: {electricity: 5200, fuel: 8200},
        H2: {electricity: 4200, fuel: 6700},
        H3: {electricity: 2800, fuel: 4500}
    };

    public calculate(calculationParams: CalculationParams): number {
        const nbWindows:number = calculationParams.nbWindows;
        const zone:string = calculationParams.zone;
        const energyType = calculationParams.energyType;

        return nbWindows * this.coefficients[zone as keyof ClimaticZoneCoefficients][energyType as keyof HeatingEnergy];
    }
}