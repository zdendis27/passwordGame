import * as React from "react";

interface CountryFlagValidatorProps {
    password: string
}

const countries = [
    "AD","AE","AF","AG","AL","AM","AO","AR","AT","AU","AZ",
    "BA","BB","BD","BE","BF","BG","BH","BI","BJ","BN","BO","BR","BS","BT","BW","BY","BZ",
    "CA","CD","CF","CG","CH","CI","CL","CM","CN","CO","CR","CU","CV","CY","CZ",
    "DE","DJ","DK","DM","DO","DZ",
    "EC","EE","EG","ER","ES","ET",
    "FI","FJ","FM","FR",
    "GA","GB","GD","GE","GH","GM","GN","GQ","GR","GT","GW","GY",
    "HN","HR","HT","HU",
    "ID","IE","IL","IN","IQ","IR","IS","IT",
    "JM","JO","JP",
    "KE","KG","KH","KI","KM","KN","KP","KR","KW","KZ",
    "LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY",
    "MA","MC","MD","ME","MG","MH","MK","ML","MM","MN","MR","MT","MU","MV","MW","MX","MY","MZ",
    "NA","NE","NG","NI","NL","NO","NP","NZ",
    "OM",
    "PA","PE","PG","PH","PK","PL","PT","PW","PY",
    "QA",
    "RO","RS","RU","RW",
    "SA","SB","SC","SD","SE","SG","SI","SK","SL","SM","SN","SO","SR","SS","ST","SV","SY",
    "SZ",
    "TD","TG","TH","TJ","TL","TM","TN","TO","TR","TT","TV","TW","TZ",
    "UA","UG","US","UY","UZ",
    "VA","VC","VE","VN","VU",
    "WS",
    "YE",
    "ZA","ZM","ZW"
];



const CountryFlagValidator = ({ password }: CountryFlagValidatorProps) => {

    const [selectedCountry] = React.useState(
        countries[Math.floor(Math.random() * countries.length)]
    );

    const isValid = password.toUpperCase().includes(selectedCountry.toUpperCase());

    console.log("selectedCountry:", selectedCountry);

    return (
        <div className="mt-4 text-sm flex flex-col items-center">

            <div className="mb-3 p-3 bg-gray-100 rounded-xl shadow-inner flex justify-center">
                <img
                    src={`https://flagsapi.com/${selectedCountry}/flat/64.png`}
                    className="w-20 h-20 object-contain"
                />
            </div>

            <p className={`font-medium text-center ${
                isValid ? "text-green-600" : "text-red-600"
            }`}>
                {isValid
                    ? " Heslo obsahuje správnou zkratku"
                    : ` Heslo neobsahuje zkratku`
                }
            </p>

        </div>
    );
};

export default CountryFlagValidator;