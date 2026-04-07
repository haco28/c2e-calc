import { V1 } from './V1';
import { V2 } from './V2';
import {CalculatorStrategy} from "../../../CalculatorStrategy";
import {resolveVersion} from "../../SheetVersionResolver";

export function getBarEn104Version(invoiceDate: string): CalculatorStrategy {
    return resolveVersion(invoiceDate, [
        { maxDate: '2023-12-31', factory: () => new V1() }, //a14
        { maxDate: '9999-12-31', factory: () => new V2() } //a54
    ]);
}