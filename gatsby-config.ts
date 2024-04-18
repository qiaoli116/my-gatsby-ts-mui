import type { GatsbyConfig } from "gatsby"

function gatsbySourceFilesystem(name: string, path: string) {
  return {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `${name}`,
      path: `${__dirname}${path}`,
    }
  }
}
const allGatsbySourceFilesystemItems = [
  gatsbySourceFilesystem("blogs", "/data/blogs"),
  gatsbySourceFilesystem("clients", "/data/clients"),
  gatsbySourceFilesystem("products", "/data/products"),
];

function gatsbyTransformerYaml (){
  return {
    resolve: `gatsby-transformer-yaml`,
    options: {
      // Conditionally set the typeName so that we both use a lowercased and capitalized type name
      typeName: ({ node }: { node: any }) => {
        const name = node.sourceInstanceName
        if (name === `products`) {
          return `Product`
        }
        return name
      },
    },
  }
}

function gatsbyTransformerJson (){
  return {
    resolve: `gatsby-transformer-json`,
    options: {
      // Conditionally set the typeName so that we both use a lowercased and capitalized type name
      typeName: ({ node }: { node: any }) => {
        const name = node.sourceInstanceName
        if (name === `clients`) {
          return `Client`
        }
        return name
      },
    },
  }
}


const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    gatsbyTransformerYaml(),
    gatsbyTransformerJson(),
    ...allGatsbySourceFilesystemItems,
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src', // <- will be used as a root dir
        aliases: {
          '@components': './components', // <- will become ./src/components
        }
      }
    }
  ],
}



export default config
