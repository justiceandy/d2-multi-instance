
import { Container, GuestIcon, GuestMenuButton } from './SignInMenu.styled'
import { mdiAccountCircle } from '@mdi/js';

const HeaderSignInMenu = () => (
    <Container>
      <GuestMenuButton>
        <GuestIcon path={mdiAccountCircle} size={1} />
      <label>Sign in with Discord</label>
     </GuestMenuButton>
   </Container>
)

export default HeaderSignInMenu;
