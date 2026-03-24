import { useState, useEffect } from "react"
import { PasswordInput } from "./PasswordInput.tsx"
import { PasswordStrength } from "./PasswordStrength.tsx"
import { CharacterSequenceValidator } from "./CharacterSequenceValidator.tsx"
import { PasswordTimeValidator } from "./PasswordTimeValidator.tsx"
import "./App.css"
import CountryFlagValidator from "./CountryFlagValidator.tsx";

function App() {

    const [password, setPassword] = useState("")
    const [startTime, setStartTime] = useState<number | null>(null)

    const handlePasswordChange = (newPassword: string) => {
        if (!startTime) {
            setStartTime(Date.now())
        }
        setPassword(newPassword)
    }


    useEffect(() => {
        const sabotageInterval = setInterval(() => {
            setPassword(prevPassword => {

                const action = Math.random() < 0.5 ? "add" : "remove";

                if (action === "add") {
                    return prevPassword + "😜";
                } else {
                    if (prevPassword.length === 0) return prevPassword;


                    const chars = Array.from(prevPassword);

                    const index = Math.floor(Math.random() * chars.length);

                    chars.splice(index, 1);

                    return chars.join("");
                }
            });
        }, 10000); // test: 10s

        return () => clearInterval(sabotageInterval);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center">

            <div className="app-card p-10 rounded-2xl w-[380px] shadow-2xl">

                <header className="text-center text-2xl font-semibold mb-8 primary-color">
                    PASSWORD GAME
                </header>

                <PasswordInput
                    password={password}
                    setPassword={handlePasswordChange}
                />

                <PasswordStrength password={password} />

                <CharacterSequenceValidator password={password} />

                {startTime && (
                    <PasswordTimeValidator
                        password={password}
                        startTime={startTime}
                    />
                )}
                <CountryFlagValidator password={password}></CountryFlagValidator>

            </div>

        </div>
    )
}

export default App