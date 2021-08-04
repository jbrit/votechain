import React from 'react'

function Label({children, normal=false}) {
    return (
        <label className={`uppercase mb-2 block font-${normal ? "normal":"bold"}`}>{children}</label>
    )
}

export default Label
