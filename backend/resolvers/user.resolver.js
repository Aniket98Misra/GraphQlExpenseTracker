import { users } from "../dummyData/data.js";
const useResolver = {
  Query: {
    users: () => {
      return users;
    },
  },
  Mutation: {},
};
export default useResolver;
