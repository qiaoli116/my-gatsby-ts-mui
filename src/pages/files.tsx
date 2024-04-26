import React from "react";
import { PageProps } from "gatsby";
import { graphql } from "gatsby";
import Layout from "@components/layout";

type TypeQuery = {
    allFile: {
        totalCount: number;
        nodes: {
            sourceInstanceName: string;
            name: string;
        }[];
    };
};

const FilesPage: React.FC<PageProps<TypeQuery>> = ({data}) => {
    let files: {
        sourceInstanceName: string;
        names: string[];
    }[] = [];
    data.allFile.nodes.forEach(node => {
        let sourceInstanceName = node.sourceInstanceName;
        let name = node.name;
        let found = files.find(file => file.sourceInstanceName === sourceInstanceName);
        if (found) {
            found.names.push(name);
        } else {
            files.push({
                sourceInstanceName: sourceInstanceName,
                names: [name]
            });
        }
    })
    console.log(files);
    return (
        <Layout>
            <h1>All files</h1>
            <p>Total files: {data.allFile.totalCount}</p>
            <table className="table-autoborder-collapse border border-slate-400">
                <thead>
                    <tr>
                        <th className="border border-slate-300 px-2">Source Instance Name</th>
                        <th className="border border-slate-300 px-2">Names</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map(file => (
                        <tr key={file.sourceInstanceName}>
                            <td className="border border-slate-300 px-2">{file.sourceInstanceName}</td>
                            <td className="border border-slate-300 px-2">
                                <ul>
                                    {file.names.map(name => (
                                        <li key={name}>{name}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    );
}

export const query = graphql`
    query {
        allFile {
            totalCount
            nodes {
                sourceInstanceName
                name
            }
        }
    }
`;


export default FilesPage;
