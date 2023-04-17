import styled from 'styled-components'

export const Container = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 35px 0;

    .rec.rec-arrow {
        background-color: #9758A6;
        color: #EFEFEF;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border: none;
    }

    .rec.rec-arrow:hover {
        border: 2px solid #9758A6;
        background-color: #EFEFEF;
        color: #9758A6;
    }

    .rec.rec-arrow:disabled {
        border: none;
        background-color: #BEBEBF;
        color: #EFEFEF;
    }
`


export const CategoryImg = styled.img`

`

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
        font-weight: 700;
        font-size: 16px;
        line-height: 120%;
        color: #424242;
    }

`

export const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    object-position: 50% 90%; 
    border-radius: 10px;

`

export const Button = styled.button`
    background: #9758A6;
    border-radius: 8px;
    height: 50px;
    border: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: #FFFFFF;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }

    &:active{
        opacity: 0.5;
    }
`