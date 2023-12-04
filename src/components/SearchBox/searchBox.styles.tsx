import styled from "styled-components";

export const StyledSearchBox = styled.div`
    position: relative;
    margin-top: 40px;
    span {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translate(0,-50%);
        display: flex;
        img{
            width: 18px;
        }
    }
`