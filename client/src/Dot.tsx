import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_IS_DRAGGING = gql`
  {
    draggedNodeId @client
  }
`;

interface Props {
  id: string;
  className?: string;
}

const Dot = ({ id, className }: Props) => {
  const { client } = useQuery(GET_IS_DRAGGING);

  const onDragStart = () => client.writeData({ data: { draggedNodeId: id } });

  const onDragEnd = () => client.writeData({ data: { draggedNodeId: null } });

  return (
    <div className={className}>
      <OuterCircle draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <InnerCircle />
      </OuterCircle>
    </div>
  );
};

const OuterCircle = styled.div`
  background-color: none;
  &:hover {
    background-color: rgb(183, 188, 191);
  }

  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerCircle = styled.div`
  background-color: rgb(75, 81, 85);

  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
`;

const StyledDot = styled(Dot)`
  grid-column: 1;
  grid-row: 1;

  display: flex;
  justify-content: center;
`;

export { StyledDot as Dot };
