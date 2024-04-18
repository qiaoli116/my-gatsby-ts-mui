import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "@components/layout"

const BlogPage: React.FC<PageProps> = (props) => {
  console.log(props)
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

    </Layout>
  )
}



export default BlogPage

export const Head: HeadFC = () => <title>Post Page</title>
