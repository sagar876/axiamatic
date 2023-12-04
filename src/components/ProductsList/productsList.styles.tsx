import styled from "styled-components";

export const StyledProductsList = styled.div`
    padding: 15px;
    position: absolute;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
    background: #fff;
    border-radius: 4px;
    width: 100%;
    margin-top: 15px;
    
    ul {
        margin:0;
        padding:0;
        li {
            border-radius: 4px;
            list-style-type: none;
            padding: 5px 10px;
            background: #4f46e5;
            color: #fff;
            margin-bottom: 15px;
            font-size: 13px;
            cursor: pointer;
            img{
                width: 25px;
                margin-right: 5px;
            }
        }
        li:last-child{
            margin: 0;
        }
    }
`