interface CharacterSequenceValidatorProps {
    password: string;
}

interface SequenceResult {
    isValid: boolean;
    sequenceCount: number;
}

export const CharacterSequenceValidator = ({ password }: CharacterSequenceValidatorProps) => {

    const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;

    let sequenceCount = 0;

    if (regex.test(password)) {
        sequenceCount = 1;
    }

    const result: SequenceResult = {
        isValid: sequenceCount > 0,
        sequenceCount: sequenceCount
    };

    return (
        <div className="mt-4 text-sm">

            <p className={`font-medium ${result.isValid ? "text-green-600" : "text-red-600"}`}>
                Sekvence znaků: {result.isValid ? "✔ Splněno" : "✖ Nesplněno"}
            </p>

            <p className="text-gray-600">
                Počet validních sekvencí: {result.sequenceCount}
            </p>

        </div>
    );
};