import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";

import { Head } from "./Head";
import { Body } from "./Body";
import { Children } from "./Children";
import { Dot } from "./Dot";
import { GET_IS_DRAGGING } from "./queries";

export interface NodeData {
  id: string;
  name: string;
  description: string;
  children: NodeData[];
}

interface Props {
  id: string;
  head: string;
  body: string;
  children: NodeData[];
  className?: string;
}

const Node = ({ id, head, body, children, className }: Props) => {
  const { data } = useQuery<{ draggedNodeId: string }>(GET_IS_DRAGGING);

  return (
    <div
      className={className}
      style={{
        backgroundColor:
          data?.draggedNodeId === id ? "lightgrey" : "transparent",
      }}
    >
      <Dot id={id} />
      <Head>{head}</Head>
      <Body>{body}</Body>
      <Children>{children}</Children>
    </div>
  );
};

const StyledNode = styled(Node)`
  display: grid;
  grid-template-columns: 2rem auto;
  color: rgb(42, 49, 53);
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  border-radius: 4px;
`;

export { StyledNode as Node };
