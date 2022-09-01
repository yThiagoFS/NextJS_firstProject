import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"
export default props => {
  const clients = [
    new Client('Zé', 34, '1'),
    new Client('a', 20, '2'),
    new Client('b', 10, '3'),
    new Client('c', 5, '4'),
    new Client('d', 40, '5'),
  ]

  function selectedClient(client:Client){
    console.log(client.name)
  }
  function removedClient(client:Client){
    console.log(client.name)
  }
  return (
    <div className={`
    flex justify-center items-center h-screen 
    bg-gradient-to-r from-blue-500 to-purple-500 
    text-white`}>

      <Layout title="Simple crud">
        <Table clients={clients} 
        selectedClient={selectedClient}
        removedClient={removedClient}></Table>
      </Layout>
      
    </div>
  )
}