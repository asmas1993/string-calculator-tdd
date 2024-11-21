import { add } from "./StringCalculator";

describe("String Calculator Tests", () => {
    it("should return 0 for an empty string", () => {
        expect(add("")).toBe(0);
    });

    it("should return the number itself when a single number is provided", () => {
        expect(add("1")).toBe(1);
        expect(add("42")).toBe(42);
    });

    it("should return the sum of two numbers", () => {
        expect(add("1,2")).toBe(3);
        expect(add("10,20")).toBe(30);
    });

    it("should return the sum of multiple numbers", () => {
        expect(add("1,2,3")).toBe(6);
        expect(add("5,10,15,20")).toBe(50);
    });

    it("should handle newlines as delimiters", () => {
        expect(add("1\n2,3")).toBe(6);
        expect(add("4\n5\n6")).toBe(15);
    });

    it("should support custom delimiters", () => {
        expect(add("//;\n1;2")).toBe(3);
        expect(add("//|\n4|5|6")).toBe(15);
        expect(add("//***\n7***8***9")).toBe(24);
    });

    it("should throw an error for negative numbers", () => {
        expect(() => add("-1,2,-3")).toThrow("Negative numbers not allowed: -1, -3");
    });

    it("should handle edge cases", () => {
       
        expect(add("1000,2000,3000")).toBe(6000);

        expect(add("//;\n1;2\n3")).toBe(6);

        expect(add("1,,2")).toBe(3);
    });
});
