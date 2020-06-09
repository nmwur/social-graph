import React from "react";
// import "antd/dist/antd.css";
import { useQuery } from "@apollo/react-hooks";

import { Node, NodeData } from "./Node";
import { GET_NODES } from "./queries";

function App() {
  const { loading, error, data } = useQuery<{ Node: NodeData[] }>(GET_NODES);

  if (loading) return <p>Loading ...</p>;

  console.log(data);

  return (
    <div>
      {data!.Node.map(({ id, name, description, children }) => (
        <Node key={id} id={id} head={name} body={description}>
          {children}
        </Node>
      ))}
    </div>
  );
}

export default App;
