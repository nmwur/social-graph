import React from "react";
// import "antd/dist/antd.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { Node, NodeData } from "./Node";

const GET_NODES = gql`
  query getAllNodes {
    Node {
      id
      name
      description
      children {
        id
        name
        description
        children {
          id
          name
          description
          children {
            id
            name
            description
            children {
              id
              name
              description
              children {
                id
                name
                description
                children {
                  id
                  name
                  description
                  children {
                    id
                    name
                    description
                    children {
                      id
                      name
                      description
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery<{ Node: NodeData[] }>(GET_NODES);

  if (loading) return <p>Loading ...</p>;

  console.log(data);

  return (
    <div>
      {data!.Node.map(({ id, name, description, children }) => (
        <Node key={id} head={name} body={description}>
          {children}
        </Node>
      ))}
    </div>
  );
}

export default App;
