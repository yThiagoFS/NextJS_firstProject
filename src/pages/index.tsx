import { useState } from "react"
import Layout from "../components/Layout"
import Table from "../components/Table"
import Form from "../components/Form"
import Client from "../core/Client"
import Button from "../components/Button"
export default props => {
  const [client, setClient] = useState<Client>(Client.void())
  const [isVisible, setIsVisible] = useState<'table' | 'form'>('table')
  const clients = [
    new Client('Zé', 34, '1'),
    new Client('a', 20, '2'),
    new Client('b', 10, '3'),
    new Client('c', 5, '4'),
    new Client('d', 40, '5'),
  ]

  function selectedClient(client: Client) {
    setClient(client)
    setIsVisible('form')
  }
  function removedClient(client: Client) {
    console.log(client.name)
  }
  function saveClient(client: Client) {
    setIsVisible('table')
  }
  function handleCanceled(){
    setClient(Client.void())
    setIsVisible('table')
  }
  return (
    <div className={`
    flex justify-center items-center h-screen 
    bg-gradient-to-r from-blue-500 to-purple-500 
    text-white`}>

      <Layout title="Simple crud">
        <div className={`flex justify-end`}>
          <Button
            onClick={() => setIsVisible('form')}
          >New Client
          </Button>
        </div>
        {isVisible === 'table' ? (
          <Table clients={clients}
            selectedClient={selectedClient}
            removedClient={removedClient}></Table>
        ) : (
          <Form
            client={client}
            canceled={handleCanceled}
            clientChanged={saveClient}
          />
        )}


      </Layout>

    </div>
  )
}