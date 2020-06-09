import React from "react";
import styled from "styled-components";

interface Props {
  children: string;
  className?: string;
}

const Body = ({ children, className }: Props) => (
  <div className={className} contentEditable suppressContentEditableWarning>
    {children}
  </div>
);

const StyledBody = styled(Body)`
  grid-column: 2;
  grid-row: 2;
  font-size: 0.8rem;
  color: grey;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  outline: none;
`;

export { StyledBody as Body };
