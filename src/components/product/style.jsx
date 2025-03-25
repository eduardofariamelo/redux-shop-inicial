import styled from "styled-components";

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px;
    background-color: #2f3042;

    h3 {
        margin-bottom: 10px;
    };

    button {
        align-self: center;
        padding: 10px;
        border-radius: 5px;
        border: none;
        background-color: #ff7272;
        color: #ffffff;
        cursor: pointer;
    };
`;