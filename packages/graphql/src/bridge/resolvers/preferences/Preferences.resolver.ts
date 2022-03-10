import {
    Resolver,
    Query,
    Arg,
    ResolverInterface,
    Mutation,
  } from "type-graphql";
  
  import { Preferences } from "../../../data/types/Preferences";
  import { createPreferencesSamples } from "../../../data/samples/preferences/preferences-samples";
  
  
  @Resolver(of => Preferences)
   /* @ts-expect-error */
  export class PreferencesResolver implements ResolverInterface<Preferences> {
    private readonly item: Preferences = createPreferencesSamples();
  
    @Query(returns => Preferences)
    async preferences(): Promise<Preferences | undefined> {
      return await this.item;
    }
    
    @Mutation(returns => Boolean)
    async updatePreference(
        @Arg("option") optionInput: string ): Promise<Boolean> {
        const process = Object.assign(new Preferences(), {
          change: optionInput
        });
        console.log('Updating', process);
        return true;
    }
  
  }
  