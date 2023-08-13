import { GraphQLObjectType, GraphQLString } from "graphql";
import { UserInterface } from "../model/UserModel";
import userData from "../json/MOCK_DATA.json";

export const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: UserInterface,
            args: {
                firstName: { type: GraphQLString },
                lastName: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            resolve(parent, args) {
                const newUser = {
                    id: userData.length + 1,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    password: args.password,
                };
                userData.push(newUser);
                return newUser;
            },
        },
    },
});