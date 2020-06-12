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
        font-weight: bold;
    }

    .a {
        border-color: ${theme.aColor};
        color: ${theme.aColor};
    }

    .b {
        border-color: ${theme.bColor};
        color: ${theme.bColor};
    }

    .c {
        border-color: ${theme.cColor};
        color: ${theme.cColor};
    }

    .d {
        border-color: ${theme.dColor};
        color: ${theme.dColor};
    }

    .e {
        border-color: ${theme.eColor};
        color: ${theme.eColor};
    }

    .highlighted {
        background-color: #e63946;
        border: 1px solid #e63946;
        color: white;
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