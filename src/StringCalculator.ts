export function add(numbers: string): number {
    if (!numbers) return 0;

    const customDelimiterMatch = numbers.match(/^\/\/(.+)\n(.*)$/);
    let delimiters = [",", "\n"];
    let numberString = numbers;

    if (customDelimiterMatch) {
        delimiters.push(customDelimiterMatch[1]);
        numberString = customDelimiterMatch[2];
    }

    const regex = new RegExp(`[${delimiters.join("")}]`);
    const parsedNumbers = numberString.split(regex).map(Number);

    const negatives = parsedNumbers.filter((num) => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return parsedNumbers.reduce((sum, num) => sum + num, 0);
}
