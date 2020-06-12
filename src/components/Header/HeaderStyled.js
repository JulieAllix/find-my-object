import styled from 'styled-components';
import theme from '../../styles/theme';

import warehouse from '../../assets/images/warehouse-pic.jpg';

const HeaderStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    

    .warehouse {
        background-image: url(${warehouse});
        background-position: center;
        background-size: cover;
        margin-top: 4rem;
        height: 180px;
        width: 100%;
    }

    .title-container {
        margin: 2rem 0;
        padding: 2rem;
        display: inline-block;
        background-color: ${theme.accentColor};
        color: white;
        font-weight: bold;
        font-size: ${theme.mobileTitle};
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

        .warehouse {
            height: 300px;
        }

        .title-container {
            margin: 4rem 0;
            padding: 3rem;
            font-size: ${theme.tabletTitle};
        }
    }

    @media screen and (min-width: 900px){

        .warehouse {
            height: 500px;
        }

        .title-container {
            margin: 8rem 0;
            padding: 3.5rem;
            font-size: ${theme.desktopTitle};
        }
        
    }
    
`

export default HeaderStyled;