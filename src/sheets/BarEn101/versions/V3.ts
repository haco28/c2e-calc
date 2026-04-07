import {CalculatorStrategy} from "../../../CalculatorStrategy";

type ClimaticZoneCoefficients = { H1: number, H2: number, H3: number };
type CalculationParams = { surface: number, zone: string };

export class V3 implements CalculatorStrategy {
    private readonly coefficients: ClimaticZoneCoefficients  = {
        H1: 1700,
        H2: 1400,
        H3: 920
    };

    public calculate(calculationParams: CalculationParams): number {
        const surface:number = calculationParams.surface;
        const zone:string = calculationParams.zone;

        return surface * this.coefficients[zone as keyof ClimaticZoneCoefficients];
    }
}