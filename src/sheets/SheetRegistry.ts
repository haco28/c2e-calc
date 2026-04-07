import { getBarEn101Version } from './BarEn101/versions/versions';
import { getBarEn102Version } from './BarEn102/versions/versions';
import { getBarEn103Version } from './BarEn103/versions/versions';
import { getBarEn104Version } from './BarEn104/versions/versions';
import {CalculatorStrategy} from "../CalculatorStrategy";

export type SheetEntry = {
    getVersion: (invoiceDate: string) => CalculatorStrategy;
};

export const sheetRegistry: Record<string, SheetEntry> = {
    'bar-en-101': { getVersion: getBarEn101Version },
    'bar-en-102': { getVersion: getBarEn102Version },
    'bar-en-103': { getVersion: getBarEn103Version },
    'bar-en-104': { getVersion: getBarEn104Version },
};