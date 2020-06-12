import styled from 'styled-components';

const MapStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem auto 3rem;

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
            width: 580px;
        }

        .shelves {
            width: 212px;
            height: 328px;
            top: 9.67rem;
            left: 15.47rem;
        }

    }

    @media screen and (min-width: 900px){
        .warehouse {
            width: 850px;
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