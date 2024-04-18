import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import Layout from "@components/layout"

type TypeProduct = {
  sku: string,
  price: number,
  description: string,
  title: string
}

const ProductPage: React.FC<PageProps<{product:TypeProduct}>> = (props) => {
  console.log(props);
  const product: TypeProduct = props.data.product;
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>SKU: {product.sku}</p>
    </Layout>
  )
}


export const query = graphql`
  query ($id: String) {
    product(id: {eq: $id}) {
      SKU
      Price
      Description
      Title
    }
  }
`


export default ProductPage

export const Head: HeadFC = () => <title>Product Page</title>
