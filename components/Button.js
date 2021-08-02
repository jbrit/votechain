import React from 'react'

function Button({
    children,
    className,
    disabled=false,
    outline=false,
    onClick=()=>{}}) {
    if(outline){
        return (
            <button onClick={onClick} disabled={disabled} className={"rounded-md border border-primary w-60 text-primary p-3 "+className}>
                {children}
            </button>
        )
    }else{
        return (
            <button onClick={onClick} disabled={disabled} className={"rounded-md bg-primary w-60 text-white p-3 "+className}>
                {children}
            </button>
        )
    }
    
}

export default Button
