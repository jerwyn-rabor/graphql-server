import { GraphQLList, GraphQLObjectType } from "graphql";
import { UserInterface } from "../model/UserModel";
import userData from "../json/MOCK_DATA.json";

export const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UserInterface),
            resolve(parent, args) {
                return userData;
            },
        }
    }
});