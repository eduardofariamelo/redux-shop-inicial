import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: inline-block;

    a {
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
    }

    svg {
        font-size: 24px; /* Ajusta o tamanho do ícone */
        color: aliceblue;
    }

    span {
        position: absolute;
        top: -5px;
        right: -10px;
        background: red;
        color: white;
        font-size: 12px;
        font-weight: bold;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
