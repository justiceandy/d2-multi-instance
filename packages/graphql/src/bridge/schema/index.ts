
import { buildSchema } from "type-graphql";
import * as path from "path";
import { 
  GameProfileResolver,
  GameAccountResolver, 
  GameProcessResolver, 
  PreferencesResolver 
} from "../resolvers";

const schema = async () => {
    const schema = await buildSchema({
        resolvers: [
          PreferencesResolver,
          GameProfileResolver,
          GameAccountResolver,
          GameProcessResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
      });

    return schema;
}


export default schema;
