import {CalculatorStrategy} from "../../../CalculatorStrategy";

type HeatingEnergy = { electricity: number, fuel: number };
type ClimaticZoneCoefficients = { H1: HeatingEnergy, H2: HeatingEnergy, H3: HeatingEnergy };
type CalculationParams = { surface: number, zone: string, energyType: string };

export class V1 implements CalculatorStrategy {
    private readonly coefficients: ClimaticZoneCoefficients = {
        H1: {electricity: 2400, fuel: 3800},
        H2: {electricity: 2000, fuel: 3100},
        H3: {electricity: 1300, fuel: 2100}
    };

    public calculate(calculationParams: CalculationParams): number {
        const surface:number = calculationParams.surface;
        const zone:string = calculationParams.zone;
        const energyType = calculationParams.energyType;

        return surface * this.coefficients[zone as keyof ClimaticZoneCoefficients][energyType as keyof HeatingEnergy];
    }
}