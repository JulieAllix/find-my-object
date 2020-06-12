import styled from 'styled-components';
import theme from '../../styles/theme';

const InputStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .search-bar-input {
        padding: .5rem;
    }

    .form {
        position: relative;
        height: 60px;
        overflow: hidden;
        width: 180px;
    }

    .form input {
        width: 100%;
        height: 100%;
        color: ${theme.accentColor};
        font-size: ${theme.mobileContent};
        padding-top: 15px;
        padding-left: 0;
        border: none;
        outline: none;
    }

    .form label {
        position: absolute;
        bottom: 0px;
        left: 0%;
        width: 100%;
        height: 100%;
        pointer-events: none;
        border-bottom: 1px solid ${theme.contentColor};
    }

    .form label::after {
        content: "";
        position: absolute;
        left: 0px;
        bottom: -1px;
        height: 100%;
        width: 100%;
        border-bottom: 3px solid ${theme.accentColor};
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }

    .content-name {
        color: ${theme.contentColor};
        font-weight: bold;
        font-size: ${theme.mobileContent};
        position: absolute;
        bottom: 5px;
        left: 0px;
        transition: all 0.3s ease;
    }

    .form input:focus + .label-name .content-name, 
    .form input:valid + .label-name .content-name {
        transform: translateY(-150%);
        color: ${theme.accentColor};
        font-size: ${theme.mobileContentMin};
    }

    .form input:focus + .label-name::after, .form input:valid + .label-name::after {
        transform: translateX(0%);
    }

    .warning-container {
        margin: 0 1rem;
        padding: 1rem;
    }

    .warning {
        width: 100%;
        font-size: ${theme.mobileContent};
        color: #e63946;
        opacity: 0;
        transition: opacity 0.6s ease;
    }

    .appear {
        opacity: 1;
        transition: opacity 0.6s ease;
    }

    em {
        font-weight: bold;
    }

    @media screen and (min-width: 600px){
    
        .form input {
            font-size: ${theme.tabletContent};
            padding-top: 15px;
        }

        .content-name {
            font-size: ${theme.tabletContent};
        }

        .form input:focus + .label-name .content-name, 
        .form input:valid + .label-name .content-name {
            font-size: ${theme.tabletContentMin};
        }

        .warning-container {
            margin: 1rem 2rem;
        }

        .warning {
            font-size: ${theme.tabletContent};
            text-align: center;
        }

    }

    @media screen and (min-width: 900px){

        .form {
            height: 70px;
        }

        .form input {
            font-size: ${theme.desktopContent};
        }

        .content-name {
            font-size: ${theme.desktopContent};
        }

        .form input:focus + .label-name .content-name, 
        .form input:valid + .label-name .content-name {
            font-size: ${theme.desktopContentMin};
        }

        .warning-container {
            margin: 0 4rem;
        }

        .warning {
            font-size: ${theme.desktopContent};
            margin-top: 2rem;
        }
        
    }
    
`

export default InputStyled;