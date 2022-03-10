import CircularProgress from '@mui/material/CircularProgress';

import { Container, SpinContainer, LoadingText } from './PageLoader.styled';
import { PageLoaderArgs } from './PageLoader.d';

export default function PageLoader ({ text }:PageLoaderArgs) {
    return (
        <Container>
            <SpinContainer>
                <CircularProgress color="inherit" />
            </SpinContainer>
            <LoadingText>{text}</LoadingText>
        </Container>
    );
  };
