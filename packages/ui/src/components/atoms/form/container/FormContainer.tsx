import {     
    Container,
} from './FormContainer.styled';

export default function FormContainer({ children }:any)  {
    return (
        <Container>
            { children }
        </Container>
    )
};
