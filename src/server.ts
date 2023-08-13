import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema/schema';

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true // Enable GraphiQL interface for testing
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
