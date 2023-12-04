import styled from "styled-components";

export const StyledProductCard = styled.div`
    margin-bottom: 20px;
    > div {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 175px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
    }
`

export const StyledAddIcon = styled.div`
    background: #f8fafc;
    border-radius: 4px;
    padding: 10px;
    img {
        width: 18px;
    }
`

export const StyledRemoveIcon = styled.div`
    position: absolute;
    cursor: pointer;
    bottom: 15px;
    left: 50%;
    display: flex;
    font-size: 11px;
    transform: translate(-50%,0);
    img{
        width: 15px;
    }
`
export const StyledProductImage = styled.div`
    text-align: center;
    img {
        max-width: 50px;
    }
    h5 {
        padding-top: 15px;
        font-size: 14px;
    }
`