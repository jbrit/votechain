import React from 'react'

function Button({
    children,
    className="",
    disabled=false,
    outline=false,
    onClick=()=>{},
    color="primary",
    width="w-60",
    size="default",
    type="button"
    }) {
    let padding = "p-3"
    if(size="sm"){
        width = ""
        padding="px-5 py-2"
    }

    if(outline){
        return (
            <button onClick={onClick} disabled={disabled} type={type} 
            className={`rounded-md border border-${color} ${width} text-${color} ${padding} ${className}`}>
                {children}
            </button>
        )
    }else{
        return (
            <button onClick={onClick} disabled={disabled} type={type} 
            className={`rounded-md bg-${color} text-white ${padding} ${className} ${width}`}>
                {children}
            </button>
        )
    }
    
}

export default Button
