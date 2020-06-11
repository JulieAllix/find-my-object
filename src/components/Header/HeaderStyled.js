import styled from 'styled-components';
import theme from '../../styles/theme';

const HeaderStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;

    .title-container {
        margin: 2rem;
        padding: 2rem;
        background-color: ${theme.accentColor};
        color: white;
        font-weight: bold;
    }

    .instructions-container {
        margin: 1rem;
        padding: 1rem;
        background-color: ${theme.backgroundColor};
        color: ${theme.accentColor};
    }

    .instructions-paragraph {
        margin: .5rem auto;
    }

    @media screen and (min-width: 600px){
    
    }

    @media screen and (min-width: 900px){

    }
    
`

export default HeaderStyled;