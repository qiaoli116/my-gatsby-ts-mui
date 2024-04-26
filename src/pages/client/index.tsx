import React from "react";
import { PageProps } from "gatsby";
import { graphql } from "gatsby";
import Layout from "@components/layout";

type TypeQuery = {
    allClient: {
        totalCount: number;
        nodes: {
            slug: string;
            name: string;
            email: string;
            phone: string;
        }[];
    };
};

const AllClientsPage: React.FC<PageProps<TypeQuery>> = ({data}) => {
    const clients = data.allClient.nodes;
    const totalClients = data.allClient.totalCount;

    console.log();
    return (
        <Layout>
            <h1>All Clients</h1>
            <p>Total clients: {totalClients}</p>
            <table>
                <thead>
                    <tr>
                        <th>Slug</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map(client => (
                        <tr key={client.slug}>
                            <td>{client.slug}</td>
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                            <td>{client.phone}</td>
                            <td><a href={`/client/${client.slug}`}>Link</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    );
}

export const query = graphql`
    query {
        allClient {
            nodes {
                email
                name
                phone
                slug
            }
            totalCount
          }
    }
`;


export default AllClientsPage;
