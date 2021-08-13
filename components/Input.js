import React from "react";
import Label from "./Label";

function Input({
    label=false,
    type = "text",
    placeholder,
    className="",
    width = "w-full",
    textArea = false,
    normal=false,
    id="",
    onChange,
    name="",
    onBlur,
    list="",
    value
}) {
    if (!textArea) {
        return (
            <div className={`block mb-4 ${className} ${width}`}>
                {label && <Label normal={normal}>{label}</Label>}
                <input
                    id={id}
                    name={name}
                    type={type}
                    list={list}
                    value={value}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    className={`font-thin border border-gray-300 rounded-lg p-4 ${width}`}
                    onChange={onChange}
                />
            </div>
        );
    } else {
        return (
            <div className={`block mb-4 ${className}`}>
                {label && <Label normal={normal}>{label}</Label>}
                <textarea
                    id={id}
                    name={name}
                    onBlur={onBlur}
                    value={value ? value : undefined}
                    rows="5"
                    placeholder={placeholder}
                    className={`font-thin border border-gray-300 rounded-lg p-4 ${width}`}
                    onChange={onChange}
                ></textarea>
            </div>
        );
    }
}

export default Input;
