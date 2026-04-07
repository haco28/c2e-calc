import { V1 } from './V1';
import { V2 } from './V2';
import { V3 } from './V3';
import { V4 } from './V4';
import { V5 } from './V5';
import {CalculatorStrategy} from "../../../CalculatorStrategy";
import {resolveVersion} from "../../SheetVersionResolver";

export function getBarEn101Version(invoiceDate: string): CalculatorStrategy {
    return resolveVersion(invoiceDate, [
        { maxDate: '2020-08-31', factory: () => new V1() }, //a27
        { maxDate: '2022-04-30', factory: () => new V2() }, //a33
        { maxDate: '2023-12-31', factory: () => new V3() }, //a39
        { maxDate: '2024-12-31', factory: () => new V4() }, //a54
        { maxDate: '9999-12-31', factory: () => new V5() }  //a64-6
    ])
}