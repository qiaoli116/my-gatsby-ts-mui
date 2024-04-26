import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import Layout from "@components/layout"

type TypeProduct = {
  SKU: string,
  Price: number,
  Description: string,
  Title: string
}

const ProductPage: React.FC<PageProps<{product:TypeProduct}>> = (props) => {
  console.log(props);
  const product: TypeProduct = props.data.product;
  console.log(product);
  return (
    <Layout>
      <h3 className="text-1xl font-bold underline">{product.Title}</h3>
      <p>{product.Description}</p>
      <p>Price: ${product.Price}</p>
      <p>SKU: {product.SKU}</p>
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
