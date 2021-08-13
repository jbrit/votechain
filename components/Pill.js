import React from "react";

function Pill({ children, className, rounded, color="bg-gray-100",textSize="xs"}) {
    return (
        <div
            className={`inline-block text-center ${color} p-2 w-32 text-${textSize} m-2 
            ${rounded && "rounded-full"} ${className}`}
        >
            {children}
        </div>
    );
}

export default Pill;
