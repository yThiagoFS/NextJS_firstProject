interface InputProps {
    text: string
    type?: 'text' | 'number'
    value: any
    readOnly?: boolean
    className?: string
    handleChange?: (value: any) => void
}

const Input = (props: InputProps) => {

    return(
        <div className={`flex flex-col ${props.className}`}>
            <label className={`mb-2`}>{props.text}</label>
            <input
            className={`border border-purple-500 rounded-lg
            focus:outline-none bg-gray-50
            ${props.readOnly ? '' : 'focus:bg-white'}
            px-4 py-2`} 
            type={props.type ?? 'text'}
            value={props.value}
            readOnly={props.readOnly}
            onChange={e => props.handleChange?.(e.target.value)}/>
        </div>
    )
}
export default Input