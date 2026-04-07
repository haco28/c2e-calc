import {CalculatorStrategy} from "../CalculatorStrategy";

type VersionEntry = {
    maxDate: string;
    factory: () => CalculatorStrategy
};

export function resolveVersion(invoiceDate: string, versions: VersionEntry[]): CalculatorStrategy {
    const date = new Date(invoiceDate);
    if (isNaN(date.getTime())) throw new Error('Invalid date');

    for (const { maxDate, factory } of versions) {
        if (date <= new Date(maxDate)) return factory();
    }

    return versions[versions.length - 1].factory(); // dernière version par défaut
}
