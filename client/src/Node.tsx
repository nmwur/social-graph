import React from "react";
import styled from "styled-components";

import { Head } from "./Head";
import { Body } from "./Body";
import { Children } from "./Children";
import { Dot } from "./Dot";

export interface NodeData {
  id: string;
  name: string;
  description: string;
  children: NodeData[];
}

interface Props {
  head: string;
  body: string;
  children: NodeData[];
  className?: string;
}

const Node = ({ head, body, children, className }: Props) => {
  return (
    <div className={className}>
      <Dot />
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
`;

export { StyledNode as Node };
