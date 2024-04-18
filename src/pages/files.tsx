import React from "react";
import { PageProps } from "gatsby";
import { graphql } from "gatsby";

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
        <div>
            <h1>All files</h1>
            <p>Total files: {data.allFile.totalCount}</p>
            {files.map(file => (
                <div key={file.sourceInstanceName}>
                    <h2 className="">{file.sourceInstanceName}</h2>
                    <ul className="list-disc list-inside">
                        {file.names.map(name => (
                            <li key={name}>{name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
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
