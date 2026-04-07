import { getBarEn101Version } from './BarEn101/versions/versions';
import { getBarEn102Version } from './BarEn102/versions/versions';
import {CalculatorStrategy} from "../CalculatorStrategy";

export type SheetEntry = {
    getVersion: (invoiceDate: string) => CalculatorStrategy;
};

export const sheetRegistry: Record<string, SheetEntry> = {
    'bar-en-101': { getVersion: getBarEn101Version },
    'bar-en-102': { getVersion: getBarEn102Version },
};