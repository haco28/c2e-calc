import {CalculatorStrategy} from "../../../CalculatorStrategy";
import {BarEn101Schema}  from "../schemas/schema";

type ClimaticZoneCoefficients = { H1: number, H2: number, H3: number };

export class V3 implements CalculatorStrategy {
    private readonly coefficients: ClimaticZoneCoefficients  = {
        H1: 1700,
        H2: 1400,
        H3: 920
    };

    public calculate(calculationParams: object): number {
        const result = BarEn101Schema.safeParse(calculationParams);
        if (!result.success) {
            throw result.error;
        }

        const surface:number = result.data.surface;
        const zone:string = result.data.zone;

        return surface * this.coefficients[zone as keyof ClimaticZoneCoefficients];
    }
}