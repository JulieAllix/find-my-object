import styled from 'styled-components';
import theme from '../../styles/theme';

const MapStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 3rem;

    .map-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .warehouse {
        width: ${theme.smallImage};
    }

    .shelves {
        position: absolute;
        width: 110px;
        height: 170px;
        z-index: 2;
        top: 5rem;
        left: 8rem;
    }

    .shelves-row {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 20%;
    }

    @media screen and (min-width: 600px){
        
        .warehouse {
            width: ${theme.mediumImage};
        }

        .shelves {
            width: 212px;
            height: 328px;
            top: 9.65rem;
            left: 15.47rem;
        }

    }

    @media screen and (min-width: 900px){
        margin: 2rem auto 3rem;

        .warehouse {
            width: ${theme.largeImage};
        }

        .shelves {
            width: 312px;
            height: 482px;
            top: 14rem;
            left: 22.6rem;
        }

    }
    
`

export default MapStyled;