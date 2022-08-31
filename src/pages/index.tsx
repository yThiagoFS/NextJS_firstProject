import Layout from "../components/Layout"
export default props => {
  return (
    <div className={`
    flex justify-center items-center h-screen 
    bg-gradient-to-r from-blue-500 to-purple-500 
    text-white`}>

      <Layout title="Simple crud">
        <span>Content</span>
      </Layout>
      
    </div>
  )
}