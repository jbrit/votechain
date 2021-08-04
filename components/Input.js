import React from "react";
import Label from "./Label";

function Input({
    label,
    type = "text",
    placeholder,
    className="",
    width = "w-full",
    textArea = false,
    normal=false
}) {
    if (!textArea) {
        return (
            <div className={`block mb-4 ${className} ${width}`}>
                <Label normal={normal}>{label}</Label>
                <input
                    id=""
                    type={type}
                    placeholder={placeholder}
                    className={`font-thin border border-gray-300 rounded-lg p-4 ${width}`}
                />
            </div>
        );
    } else {
        return (
            <div className={`block mb-4 ${className}`}>
                <Label normal={normal}>{label}</Label>
                <textarea
                    id=""
                    rows="5"
                    placeholder={placeholder}
                    className={`font-thin border border-gray-300 rounded-lg p-4 ${width}`}
                ></textarea>
            </div>
        );
    }
}

export default Input;
