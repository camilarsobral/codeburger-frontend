import styled from 'styled-components'

export const Container = styled.div`
background: #FFFFFF;
box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
border-radius: 30px;
display: flex;
gap: 12px;
padding: 16px;
width: max-content;

div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
`

export const Image = styled.img`
width: 170px;
height: 150px;
object-fit: cover;
    object-position: 30% 30%; 
border-radius: 20px;
`

export const ProductName = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #000000;
`

export const ProductPrice = styled.p`
font-weight: 500;
font-size: 18px;
line-height: 21px;
color: #000000;
margin-top: 55px;
`