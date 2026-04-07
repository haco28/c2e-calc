import {CalculatorStrategy} from "../../../CalculatorStrategy";

type ClimaticZoneCoefficients = { H1: number, H2: number, H3: number };
type CalculationParams = { surface: number, zone: string, energyType: string };

export class V1 implements CalculatorStrategy {
    private readonly coefficients: ClimaticZoneCoefficients = {
        H1: 1600,
        H2: 1300,
        H3: 900
    };

    public calculate(calculationParams: CalculationParams): number {
        const surface:number = calculationParams.surface;
        const zone:string = calculationParams.zone;

        return surface * this.coefficients[zone as keyof ClimaticZoneCoefficients];
    }
}