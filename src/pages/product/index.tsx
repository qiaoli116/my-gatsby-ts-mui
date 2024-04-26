import React from "react";
import { PageProps } from "gatsby";
import { graphql } from "gatsby";
import Layout from "@components/layout";

type TypeQuery = {
    allProduct: {
        totalCount: number;
        nodes: {
            SKU: string;
            Title: string;
            Price: number;
            Description: string;
        }[];
    };
};

const AllClientsPage: React.FC<PageProps<TypeQuery>> = ({data}) => {
    const products = data.allProduct.nodes;
    const totalProducts = data.allProduct.totalCount;

    console.log();
    return (
        <Layout>
            <h1>All Productrs</h1>
            <p>Total products: {totalProducts}</p>
            <table>
                <thead>
                    <tr>
                        <th>SKU</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.SKU}>
                            <td>{product.SKU}</td>
                            <td>{product.Title}</td>
                            <td>{product.Price}</td>
                            <td>{product.Description}</td>
                            <td><a href={`/product/${product.SKU}`}>Link</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    );
}

export const query = graphql`
    query {
        allProduct {
            totalCount
            nodes {
                SKU
                Title
                Price
                Description
            }
        }
    }
`;


export default AllClientsPage;
