import { useEffect, useState } from "react";

const NAME = "-code-pen";

export default function useLocalStorage(key: string, intialValue: any) {
    const codekey = key + NAME;
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(codekey);
        if (jsonValue != null) return JSON.parse(jsonValue);

        if (typeof intialValue === "function") {
            return intialValue();
        } else {
            return intialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(codekey, JSON.stringify(value));
    }, [codekey, value]);

    return [value, setValue]
}
