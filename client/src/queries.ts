import { gql } from "apollo-boost";

export const GET_NODES = gql`
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

export const GET_IS_DRAGGING = gql`
  {
    draggedNodeId @client
  }
`;
