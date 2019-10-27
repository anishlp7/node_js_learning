const { buildSchema } = require('graphql');

module.exports  = buildSchema(`
   
    type post {
        _id:ID!
        title:String!
        content:String!
        imageUrl:String!
        creator:User!
        createdAt:String!
        updatedAt:String!
    }

    type User {
        _id:ID!
        email:String!
        name:String!
        password:String
        status:String!
        posts:[post!]!

    }

    input userInputData {
        email:String!
        name:String!
        password:String!
    }

    type rootQuery {
        hello:String!
    }

    type rootMutation {
        createUser(userInput: userInputData): User!
    }

    schema {
        query: rootQuery
       mutation: rootMutation
   }
`) 