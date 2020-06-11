import styled from 'styled-components';
import theme from '../../styles/theme';

import warehouse from '../../assets/images/warehouse.jpg';

const MapStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;

    .map-container {
        /*background-image: url(${warehouse });
        background-position: center;
        background-size: auto;
        border: 1px solid red;
        width: 95%;
        min-height: 800px;
        */
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

    @media screen and (min-width: 600px){
    
    }

    @media screen and (min-width: 900px){

    }
    
`

export default MapStyled;