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
import { GameProfile, BattleNetConfig, SquadMemberConfig } from "../../../data/types/game/GameProfile";
import { createProfileSamples } from "../../../data/samples/game/profile/profile-samples";
import { JsonStore } from "../../libs/settings/electron-store";

@Resolver(of => GameProfile)
/*@ts-expect-error */
export class GameProfileResolver implements ResolverInterface<GameProfile> {
  private readonly items: GameProfile[] = createProfileSamples();
  private readonly accounts: any = JsonStore({ name: "Accounts"});

  @Query(returns => GameProfile)
  async profile(@Arg("name") name: string): Promise<GameProfile | undefined> {
    return await this.items.find(profile => profile.name === name);
  }

  @Query(returns => [GameProfile], { description: "Get all Account Profiles" })
  async profiles(): Promise<GameProfile[]> {
    return await this.items;
  }

  @Mutation(returns => GameProfile)
  async addProfile(
      @Arg("profile") profileInput: GameProfile,
  ): Promise<GameProfile> {

    console.log(this.accounts);

    const profile = Object.assign(new GameProfile(), {
      ...profileInput,
      id: 1,
      creationDate: new Date(),
    });
    console.log(profile);
    await this.items.push(profile);
    return profile;
  }

  @Mutation(returns => GameProfile)
  async updateProfile(
      @Arg("profile") profileInput: GameProfile ): Promise<GameProfile> {
      const profile = Object.assign(new GameProfile(), {
        ...profileInput,
      });
      console.log('Updating', profile);
      return profile;
  }

  @FieldResolver(returns => [SquadMemberConfig])
    async squads(
      @Root() profile: GameProfile,
    ): Promise<[SquadMemberConfig]> {
      return [
        {
          enabled: true,
          squad: 'Squad 1',
          order: 1,
        }
      ];
    }

  @FieldResolver(returns => BattleNetConfig)
    async battleNet(
      @Root() profile: GameProfile,
    ): Promise<BattleNetConfig> {
      return {
        region: 'US',
        offlineOnly: false,
        account: "example1",
        automated: true,
        local: 'english',
      };
    }
}
