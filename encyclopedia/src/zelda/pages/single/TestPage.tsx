import { gql, useQuery } from "@apollo/client";

const query = gql`
  query {
    monsters(name: "Lizalfos") {
      name
      description
      appearances {
        name
        released_date
      }
    }
  }
`;
export const TestPage = () => {
  const res = useQuery(query);
  console.log(res);
  return <div>TestPage</div>;
};
