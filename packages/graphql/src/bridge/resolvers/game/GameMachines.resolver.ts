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

import { GameClientMachine } from "../../../data/types/game/GameMachines";
import { createGameClientMachineSamples } from "../../../data/samples/game/machine/machines-samples";


@Resolver(of => GameClientMachine)
 /* @ts-expect-error */
export class GameClientMachineResolver implements ResolverInterface<GameClientMachine> {
  private readonly items: GameClientMachine[] = createGameClientMachineSamples();

  @Query(returns => GameClientMachine)
  async profile(@Arg("name") name: string): Promise<GameClientMachine | undefined> {
    return await this.items.find(profile => profile.ip === name);
  }

  @Query(returns => [GameClientMachine], { description: "Get all Account Profiles" })
  async accounts(): Promise<GameClientMachine[]> {
    return await this.items;
  }

  @Mutation(returns => GameClientMachine)
  async addProfile(
      @Arg("profile") profileInput: GameClientMachine,
  ): Promise<GameClientMachine> {
    const profile = Object.assign(new GameClientMachine(), {
      ...profileInput,
      id: 1,
      creationDate: new Date(),
    });
    console.log(profile);
    await this.items.push(profile);
    return profile;
  }

  @Mutation(returns => GameClientMachine)
  async updateGameMachine(
      @Arg("account") profileInput: GameClientMachine ): Promise<GameClientMachine> {
      const profile = Object.assign(new GameClientMachine(), {
        ...profileInput,
      });
      console.log('Updating', profile);
      return profile;
  }

}
