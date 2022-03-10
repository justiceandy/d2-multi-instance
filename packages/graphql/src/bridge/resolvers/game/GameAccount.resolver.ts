import {
  Resolver,
  Query,
  FieldResolver,
  Arg,
  Root,
  Mutation,
  Int,
  ResolverInterface,
} from "type-graphql";
import { Store } from "@d2r/level-db"
import { GameAccount } from "../../../data/types/game/GameAccount";
import { createAccountSamples } from "../../../data/samples/game/account/account-samples";


@Resolver(of => GameAccount)
 /* @ts-expect-error */
export class GameAccountResolver implements ResolverInterface<GameAccount> {
  private readonly items: GameAccount[] = createAccountSamples();

  @Query(returns => GameAccount)
  async profile(@Arg("name") name: string): Promise<GameAccount | undefined> {
    return await this.items.find(profile => profile.email === name);
  }

  @Query(returns => [GameAccount], { description: "Get all Account Profiles" })
  async accounts(): Promise<GameAccount[]> {
    return await this.items;
  }

  @Mutation(returns => GameAccount)
  async addProfile(
      @Arg("profile") profileInput: GameAccount,
  ): Promise<GameAccount> {
    const profile = Object.assign(new GameAccount(), {
      ...profileInput,
      id: 1,
      creationDate: new Date(),
    });
    console.log(profile);
    await this.items.push(profile);
    return profile;
  }

  @Mutation(returns => GameAccount)
  async updateGameAccount(
      @Arg("account") profileInput: GameAccount ): Promise<GameAccount> {
      const profile = Object.assign(new GameAccount(), {
        ...profileInput,
      });
      console.log('Updating', profile);
      return profile;
  }

}
