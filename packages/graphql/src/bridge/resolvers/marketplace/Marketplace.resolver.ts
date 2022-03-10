import {
    Resolver,
    Query,
    ResolverInterface,
  } from "type-graphql";
  
  import { Marketplace } from "../../../data/types/Marketplace";
  import { MarketplacePlugin } from "../../../data/types/Plugin";
  import { createMarketplaceSamples } from "../../../data/samples/marketplace/marketplace-samples";
  
  
  @Resolver(of => Marketplace)
   /* @ts-expect-error */
  export class MarketplaceResolver implements ResolverInterface<Marketplace> {
    private readonly item: Marketplace = createMarketplaceSamples();


    @Query(returns => [MarketplacePlugin])
    async avilablePlugins(): Promise<MarketplacePlugin[] | undefined> {
      return await this.item.plugins;
    }
  
  }
  