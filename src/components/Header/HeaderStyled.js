import styled from 'styled-components';
import theme from '../../styles/theme';

import warehouse from '../../assets/images/warehouse-pic.jpg';

const HeaderStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
    margin-top: 5rem;

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

    .subtitle {
        color: ${theme.accentColor};
        font-weight: bold;
        font-size: ${theme.mobileSubtitle};
        margin: .5rem auto 1rem;
        line-height: 1.4rem;
    }

    .instructions-paragraph {
        color: ${theme.contentColor};
        font-size: ${theme.mobileContent};
        margin: .5rem auto;
        line-height: 1.2rem;
    }

    em {
        font-weight: bold;
        color: ${theme.accentColor};
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

        .instructions-container {
            margin: 2rem;
        }

        .subtitle {
            font-size: ${theme.tabletSubtitle};
            margin: .5rem auto 1rem;
            line-height: 1.7rem;
        }

        .instructions-paragraph {
            font-size: ${theme.tabletContent};
            line-height: 1.5rem;
        }
    }

    @media screen and (min-width: 900px){

        .warehouse {
            margin-top: 5rem;
            height: 500px;
        }

        .title-container {
            margin: 10rem 0;
            padding: 3.5rem;
            font-size: ${theme.desktopTitle};
        }

        .instructions-container {
            margin: 4rem;
        }

        .subtitle {
            font-size: ${theme.desktopSubtitle};
            margin: .5rem auto 1.5rem;
            line-height: 2.2rem;
        }

        .instructions-paragraph {
            font-size: ${theme.desktopContent};
            line-height: 1.9rem;
        }
        
    }

    @media screen and (min-width: 1400px){
        .instructions-container {
            margin: 4rem 8rem;
        }
    }
    
`

export default HeaderStyled;