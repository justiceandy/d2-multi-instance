import { Field, ObjectType, InputType } from "type-graphql";


@ObjectType({ description: "Character Progression Status" })
@InputType("CharacterProgressInput", { description: "Character Progression Status" })
export class CharacterProgress {
  
  @Field({ description: "Plugin Id", nullable: true })
  difficulty: string | null;

  @Field({ description: "Local Screenshot of Item", nullable: true })
  act: string | null;
}


@ObjectType({ description: "Attributes about a Game Account Character" })
@InputType("CharacterInput", { description: "Attributes about a Game Account Character" })
export class Character {
  
  @Field({ description: "Unique ID" })
  id: string;

  @Field({ description: "Character Name" })
  name: string;

  @Field({ description: "Class of Character" })
  class: string;

  @Field({ description: "Hard or Soft", nullable: true })
  core: string | null;

  @Field({ description: "Level of Character", nullable: true })
  level: string | null;

  @Field({ description: "Progression Status of Character", nullable: true })
  progress: CharacterProgress;
}
