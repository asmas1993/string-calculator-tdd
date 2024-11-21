import React, { useState } from "react";
import { add } from "../StringCalculator";

const StringCalculator: React.FC = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState("");

    const handleCalculate = () => {
        try {
            const sum = add(input);
            setResult(sum);
            setError("");
        } catch (err: any) {
            setResult(null);
            setError(err.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">String Calculator</h1>
            <input
                type="text"
                className="w-96 p-2 border rounded mb-4"
                placeholder="Enter numbers (e.g., 1,2 or //;\n1;2)"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleCalculate}
            >
                Calculate
            </button>
            {result !== null && (
                <div className="text-green-500 text-lg mt-4">Result: {result}</div>
            )}
            {error && <div className="text-red-500 text-lg mt-4">{error}</div>}
        </div>
    );
};

export default StringCalculator;
