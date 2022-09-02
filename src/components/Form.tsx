import { useState } from "react"
import Input from "./Input"
import Button from "./Button"
import Client from "../core/Client"
interface FormProps {
    client: Client
    clientChanged?: (client:Client) => void
    canceled?: () => void 
}
const Form = (props: FormProps) => {
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)
    return (
        <div>
            {id ? (
                <Input
                    readOnly
                    text="Code"
                    value={id}
                    className="mb-4"
                />
            ) : false}
            <Input
                text="Name"
                value={name}
                handleChange={setName}
                className="mb-4"
            />
            <Input
                text="Age"
                type="number"
                value={age}
                handleChange={setAge}
            />

            <div className={`flex justify-end mt-3`}>
                <Button
                onClick={() => props.clientChanged?.(new Client(name, +age, id))}
                className={`mr-2`}>
                {id ? 'Edit' : 'Save'}
                </Button>
                <Button 
                onClick={props.canceled}
                >
                    Cancel
                </Button>
            </div>
        </div>
    )
}
export default Form