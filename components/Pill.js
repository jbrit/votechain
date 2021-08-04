import React from "react";

function Pill({ children, className, rounded}) {
    return (
        <div
            className={`inline-block text-center bg-gray-100 p-2 w-32 text-xs m-2 
            ${rounded && "rounded-full"} ${className}`}
        >
            {children}
        </div>
    );
}

export default Pill;
