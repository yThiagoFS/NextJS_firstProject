import Client from "../core/Client"
interface TableProps {
    clients: Client[]
}
const Table = (props: TableProps) => {

    function renderHeader() {
        return (
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
        )
    }
    function renderData(){
        return props.clients?.map((client, i) => {
            return(
                <tr key={client.id}>
                    <td>{client.id}</td>
                    <td>{client.name}</td>
                    <td>{client.age}</td>
                </tr>
            )
        })
    }

    return (
        <table>
            <thead>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}
export default Table