import { get } from './get';

export type BattleTag = {
    account_id_lo: string  
}

export const getMetaData = async () => {
    const [ accountId , battleTags ] = await Promise.all([
        get({ query: 'accountId' }),
        get({ query: 'battleTags' })
    ]);
    
    const meta = accountId ? JSON.parse(accountId.pop().value) : null;

    const battleTag = battleTags
        .filter((i:BattleTag) => i.account_id_lo === meta.account_id).pop();
        
    return {
        meta,
        battleTag,
    }
}
