import styled from 'styled-components'

export const Container = styled.div`
    background-color: #FFF;
    padding: 15px;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .container-top {
        display: grid;
        grid-gap: 10px 50px;
        grid-template-areas:
        'title title'
        'items items-price'
        'delivery delivery-fee';

        .title {
        grid-area: title;
        margin-bottom: 20px;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        }

        .items {
            grid-area: items;
        }

        .items-price {
            grid-area: items-price;
        }

        .delivery {
            grid-area: delivery;
        }

        .delivery-fee {
            grid-area: delivery-fee;
        }

        p {
            font-weight: 300;
            font-size: 14px;
        }
    }

    .container-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 24px;
        margin-top: 50px;
    }

    
`


