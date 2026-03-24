import { useState } from "react";
import vis from "../src/assets/vis.svg";
import vis2 from "../src/assets/vis2.svg";

interface PasswordInputProps {
    password: string;
    setPassword: (newPassword: string) => void;
}

export const PasswordInput = ({ password, setPassword }: PasswordInputProps) => {

    const [isSecret, setIsSecret] = useState(true);

    const toggleChange = () => {
        setIsSecret(prev => !prev);
    };

    return (
        <div className="relative mb-6">

            <input
                className="
                w-full px-4 py-3 pr-16 rounded-lg border-2 primary-border text-sm
                bg-white text-black placeholder-gray-400
                dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600
                focus:ring-4 focus:ring-blue-200 outline-none transition
                "
                type={isSecret ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Zadej heslo..."
            />

            <button
                type="button"
                onClick={toggleChange}
                className="absolute right-4 top-1/2 -translate-y-1/2"
            >
                {isSecret
                    ? <img src={vis} alt="show" className="w-5 h-5 opacity-60 hover:opacity-100"/>
                    : <img src={vis2} alt="hide" className="w-5 h-5 opacity-60 hover:opacity-100"/>
                }
            </button>

        </div>
    );
};