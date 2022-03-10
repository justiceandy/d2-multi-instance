
import { 
    Grid, GridItem } from '../../AccountList.styled';
import AccountItem from '../../../item/AccountItem';

export const AccountLocalList = ({ accounts, queState }:any) => (
    <Grid>
        {accounts.map(item => 
        <GridItem>
          <AccountItem name={item.name} QueState={queState} id={item.id} />
        </GridItem>
        )}
    </Grid>
  )

export default AccountLocalList;
