import { useId } from "react"
import React from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
}, ref) {
    const id = useId();
    return (
        <div className="w-full">{label && <label htmlFor={id} className=" "></label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`}
            >
                {/* if options present then only apply the mapping */}
                {options?.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div> // closing div tag
    )
}

export default React.forwardRef(Select)