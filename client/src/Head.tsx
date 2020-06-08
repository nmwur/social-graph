import React from "react";
import styled from "styled-components";

interface Props {
  children: string;
  className?: string;
}

const Head = ({ children, className }: Props) => (
  <div className={className} contentEditable>
    {children}
  </div>
);

const StyledHead = styled(Head)`
  grid-column: 2;
  grid-row: 1;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  outline: none;
`;

export { StyledHead as Head };
