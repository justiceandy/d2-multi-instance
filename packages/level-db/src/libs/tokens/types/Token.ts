import { Field, ObjectType, InputType } from "type-graphql";


@ObjectType({ description: "Auth Tokens for Account Profile" })
@InputType("BattleNetTokenInput", { description: "Auth Tokens for Account Profile" })
export class BattleNetToken {

  @Field({ 
    description: "OSI/GAME_ACCOUNT Registry Key",
    defaultValue: '', 
  })
  GAME_ACCOUNT: string;
  
  @Field({ 
    description: "OSI/ACCOUNT Registry Key",
  })
  ACCOUNT: number[];

  @Field({ 
    description: "OSI/ACCOUNT_STATE Registry Key",
  })
  ACCOUNT_STATE: number[];

  @Field({ 
    description: "OSI/ACCOUNT_TS Registry Key",
  })
  ACCOUNT_TS: string | null;

  @Field({ 
    description: "OSI/WEB_TOKEN Registry Key",
  })
  WEB_TOKEN: number[];
}


@ObjectType({ description: "Compare Hash Strings for Token Values" })
export class TokenCompare {


  @Field({ 
    description: "OSI/ACCOUNT Registry Key",
    defaultValue: '', 
  })
  ACCOUNT: string;

  @Field({ 
    description: "OSI/ACCOUNT_STATE Registry Key",
    defaultValue: '', 
  })
  ACCOUNT_STATE: string;

  @Field({ 
    description: "OSI/WEB_TOKEN Registry Key",
    defaultValue: '', 
  })
  WEB_TOKEN: string;
}


@ObjectType({ description: "Auth Tokens for Account Profile" })
@InputType("TokenInput", { description: "Auth Tokens for Account Profile" })
export class Token {

  @Field({ 
    description: "Process ID",
  })
  id:  string;

  @Field({ 
    description: "Process ID",
  })
  processId:  string | null;
  
  @Field({ 
    description: "Account ID",
  })
  account: string | null;

  @Field({ 
    description: "Raw Token Value",
  })
  raw: BattleNetToken;

  @Field({ 
    description: "Compare Hash Strings for Token Values",
  })
  compare: TokenCompare;
}

