interface ButtonProps  {
    color?: 'green' | 'blue' | 'gray'
    children: any
    className?: any
    onClick?: (value?: any) => void
}
const Button = (props: ButtonProps) => {
    return(
        <button
        onClick={() => props.onClick?.()}
        className={`
        bg-gradient-to-r from-blue-400 to-blue-700 
        rounded-md px-3 py-2 text-white text-xl mb-4 ${props.className}`}>
            {props.children}
        </button>
    )
}
export default Button