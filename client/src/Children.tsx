import React from "react";
import styled from "styled-components";

import { Node, NodeData } from "./Node";

interface Props {
  children: NodeData[];
}

export const Children = ({ children }: Props) => (
  <>
    <LineWrapper>
      <Line />
    </LineWrapper>
    <List>
      {children.map(({ id, name, description, children }) => (
        <Node key={id} id={id} head={name} body={description}>
          {children}
        </Node>
      ))}
    </List>
  </>
);

const LineWrapper = styled.div`
  grid-column: 1;
  grid-row: 3 / auto;

  display: flex;
  justify-content: center;
`;

const Line = styled.div`
  background-color: rgb(236, 238, 240);
  width: 1px;
  height: 100%;
`;

const List = styled.div`
  grid-column: 2;
  grid-row: 3;
`;
