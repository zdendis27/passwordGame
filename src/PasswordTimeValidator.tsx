import { useEffect, useState } from "react";

interface PasswordTimeValidatorProps {
    password: string;
    startTime: number;
}

export const PasswordTimeValidator = ({ password, startTime }: PasswordTimeValidatorProps) => {

    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        const currentTime = Date.now();
        setElapsedTime((currentTime - startTime) / 1000);
    }, [password, startTime]);

    const isValid = elapsedTime >= 5;

    return (
        <div className="mt-4 text-sm">

            <p className={`font-medium ${isValid ? "text-green-600" : "text-red-600"}`}>
                Čas zadání hesla: {isValid ? "✔ OK" : "✖ Příliš rychlé"}
            </p>

            <p className="text-gray-600">
                Čas: {elapsedTime.toFixed(2)} s
            </p>

        </div>
    );
};