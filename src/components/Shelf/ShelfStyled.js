import styled from 'styled-components';
import theme from '../../styles/theme';

const ShelfStyled = styled.div`

    .shelf {
        width: 16px;
        height: 100%;
        border: 1px solid blue;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .shelf-name {
        font-size: .7rem;
    }

    @media screen and (min-width: 600px){

        .shelf {
            width: 33px;
        }

        .shelf-name {
            font-size: 1rem;
        }

    }

    @media screen and (min-width: 900px){
        .shelf {
            width: 50px;
        }

        .shelf-name {
            font-size: 1.5rem;
        }

    }
    
`

export default ShelfStyled;