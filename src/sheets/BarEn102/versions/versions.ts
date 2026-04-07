import { V1 } from './V1';
import { V2 } from './V2';
import { V3 } from './V3';
import {CalculatorStrategy} from "../../../CalculatorStrategy";
import {resolveVersion} from "../../SheetVersionResolver";

export function getBarEn102Version(invoiceDate: string): CalculatorStrategy {
    return resolveVersion(invoiceDate, [
        { maxDate: '2022-04-30', factory: () => new V1() }, //a14
        { maxDate: '2024-12-31', factory: () => new V2() }, //a39
        { maxDate: '9999-12-31', factory: () => new V3() }  //a65-4
    ]);
}