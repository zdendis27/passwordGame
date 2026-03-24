import { useState, useEffect } from "react";

interface PasswordStrengthProps {
    password: string;
}

export const PasswordStrength = ({ password }: PasswordStrengthProps) => {

    const [passwordStrength, setPasswordStrength] = useState("");
    const [strengthColor, setStrengthColor] = useState("");
    const [score, setScore] = useState(0);

    const evaluatePassword = (password: string) => {
        const hasMinLength = password.length >= 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*]/.test(password);

        const score =
            Number(hasMinLength) +
            Number(hasUppercase) +
            Number(hasNumber) +
            Number(hasSpecialChar);

        let text = "";
        let color = "";

        if (score <= 1) {
            text = "Slabé";
            color = "bg-red-500";
        } else if (score <= 3) {
            text = "Střední";
            color = "bg-orange-500";
        } else {
            text = "Silné";
            color = "bg-green-500";
        }

        return {
            text,
            color,
            score,
            hasMinLength,
            hasUppercase,
            hasNumber,
            hasSpecialChar
        };
    };

    const [checks, setChecks] = useState({
        hasMinLength: false,
        hasUppercase: false,
        hasNumber: false,
        hasSpecialChar: false
    });

    useEffect(() => {
        const result = evaluatePassword(password);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPasswordStrength(result.text);
        setStrengthColor(result.color);
        setScore(result.score);
        setChecks({
            hasMinLength: result.hasMinLength,
            hasUppercase: result.hasUppercase,
            hasNumber: result.hasNumber,
            hasSpecialChar: result.hasSpecialChar
        });
    }, [password]);

    useEffect(() => {
        document.title = `Síla hesla: ${passwordStrength}`;
    }, [passwordStrength]);

    return (
        <div className="mb-4">

            <p className={`mb-2 font-medium ${
                score <= 1 ? "text-red-600" :
                    score <= 3 ? "text-orange-600" :
                        "text-green-600"
            }`}>
                Síla hesla: {passwordStrength}
            </p>

            <div className="w-full h-2 bg-gray-200 rounded-md overflow-hidden mb-3">
                <div
                    className={`h-full transition-all duration-300 ${strengthColor}`}
                    style={{ width: `${(score / 4) * 100}%` }}
                />
            </div>

            <ul className="text-sm space-y-1">
                <li className={checks.hasMinLength ? "text-green-600" : "text-gray-400"}>
                    Minimálně 8 znaků
                </li>
                <li className={checks.hasUppercase ? "text-green-600" : "text-gray-400"}>
                    Obsahuje velké písmeno
                </li>
                <li className={checks.hasNumber ? "text-green-600" : "text-gray-400"}>
                    Obsahuje číslo
                </li>
                <li className={checks.hasSpecialChar ? "text-green-600" : "text-gray-400"}>
                    Obsahuje speciální znak (!@#$%^&*)
                </li>
            </ul>

        </div>
    );
};