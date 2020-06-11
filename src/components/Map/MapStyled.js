import styled from 'styled-components';
import theme from '../../styles/theme';

import warehouse from '../../assets/images/warehouse.jpg';

const MapStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;

    .map-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .warehouse {
        width: 300px;
    }

    .shelves {
        position: absolute;
        border: 1px solid red;
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
        border: 1px solid green;
    }

    .shelf {
        width: 16.66%;
        border: 1px solid blue;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (min-width: 600px){
    
    }

    @media screen and (min-width: 900px){
        .warehouse {
            width: 850px;
        }

        .shelves {
            position: absolute;
            border: 1px solid red;
            width: 312px;
            height: 482px;
            z-index: 2;
            top: 14rem;
            left: 22.6rem;
        }
    }
    
`

export default MapStyled;