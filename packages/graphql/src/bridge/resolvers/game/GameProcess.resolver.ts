import {
    Resolver,
    Query,
    ResolverInterface,
    Mutation,
    Arg,
  } from "type-graphql";
  
  import { GameProcess } from "../../../data/types/game/GameProcess";
  import { createGameProcessSamples } from "../../../data/samples/game/process/process-samples";
  
  
  @Resolver(of => GameProcess)
   /* @ts-expect-error */
  export class GameProcessResolver implements ResolverInterface<GameProcess> {
    private readonly items: GameProcess[] = createGameProcessSamples();
  
    @Query(returns => [GameProcess])
    async processes(): Promise<GameProcess[] | undefined> {
      return await this.items;
    }

    @Mutation(returns => GameProcess)
    async startGameProcess(
        @Arg("profile") profileInput: string ): Promise<GameProcess> {
        const process = Object.assign(new GameProcess(), {
          id: 1,
          creationDate: new Date(),
        });
        console.log('Starting', process);
        return process;
    }
  
    @Mutation(returns => GameProcess)
    async stopGameProcess(
        @Arg("profile") profileInput: string ): Promise<GameProcess> {
        const process = Object.assign(new GameProcess(), {
          id: 1,
          creationDate: new Date(),
        });
        console.log('Stopping', process);
        return process;
    }

    @Mutation(returns => GameProcess)
    async statusGameProcess(
        @Arg("profile") profileInput: string ): Promise<GameProcess> {
        const process = Object.assign(new GameProcess(), {
          id: 1,
          creationDate: new Date(),
        });
        console.log('status of', process);
        return process;
    }
  
  }
  