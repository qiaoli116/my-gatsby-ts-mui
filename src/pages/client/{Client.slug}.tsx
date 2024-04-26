import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import Layout from "@components/layout"

type TypeClient = {
  clientId: string
  slug: string
  name: string
  email: string
  phone: string
}

const ClientPage: React.FC<PageProps<{client:TypeClient}>> = (props) => {
  console.log(props)
  const client: TypeClient = props.data.client;
  return (
    <Layout>
      <h1 className="text-1xl font-bold underline">{client.name}</h1>
      <p>{client.email}</p>
      <p>{client.phone}</p>
      <p>{client.clientId}</p>
      <p>{client.slug}</p>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    client(id: {eq: $id}) {
      clientId
      slug
      name
      email
      phone
    }
  }
`

export default ClientPage

export const Head: HeadFC = () => <title>Client Page</title>
