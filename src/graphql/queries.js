import { gql } from "@apollo/client";

export const GET_ALL_TASKS = gql`
query{
  tasks{
    id,
    name,
    project,
    date,
    minutes,
    hours,
    status
  }
}
`;