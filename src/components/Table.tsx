import Client from "../core/Client"
import { EditIcon, TrashIcon } from "./Icons"
interface TableProps {
    clients: Client[]
    selectedClient?: (client: Client) => void
    removedClient?: (client: Client) => void
}
const Table = (props: TableProps) => {

    const showActions = props.removedClient || props.selectedClient

    function renderHeader() {
        return (
            <tr>
                <th className={`text-left p-4`}>Code</th>
                <th className={`text-left p-4`}>Name</th>
                <th className={`text-left p-4`}>Age</th>
                {showActions ? <th className={`text-center p-4`}>Actions</th> : false}
            </tr>
        )
    }
    function renderData(){
        return props.clients?.map((client, i) => {
            return(
                <tr key={client.id}
                className={`${i % 2 === 0 ? 'bg-purple-300' : 'bg-purple-100'}`}>
                    <td className={`text-left p-4`}>{client.id}</td>
                    <td className={`text-left p-4`}>{client.name}</td>
                    <td className={`text-left p-4`}>{client.age}</td>
                    {showActions ? renderIcons(client) : false}
                </tr>
            )
        })
    }
    function renderIcons(client: Client){
        return(
            <td className={`
            flex justify-center`}>
                {props.selectedClient ? (
                    <button className={`
                    flex justify-center items-center
                    text-green-600 rounded-full
                    hover:bg-purple-50 p-2 m-1
                    `}
                    onClick={() => props.selectedClient?.(client)}>{EditIcon}</button>

                ) : false}
                {props.removedClient ? (
                    <button className={`
                    flex justify-center items-center
                    text-red-600 rounded-full
                    hover:bg-purple-50 p-2 m-1
                    `}
                    onClick={() => props.removedClient?.(client)}>{TrashIcon}</button>
                ) : false}
            </td>
        )
    }

    return (
        <table className={`w-full rounded-xl overflow-hidden`}>
            <thead className={`
            text-white
            bg-gradient-to-r from-purple-500 to-purple-800`}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}
export default Table