import styled from 'styled-components'
import Background from '../../assets/background.svg'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url('${Background}');
    display: flex;
    justify-content: start;
    align-items: center;
`

export const RegisterImage = styled.img`
    height: 100%;
`

export const ContainerItems = styled.div`
    background: #373737;
    border-radius: 0 10px 10px 0;
    height: 100%;
    width: 100%;
    padding: 25px 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0;

    form {
        display: flex;
        flex-direction: column;
    }

    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
        text-align: center;
        margin-top: 50px;
    }

    .sc-hhGHuG.gQwNUx {
        padding-left: 55px;
    }
`

export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    margin-top: 28px;
    margin-bottom: 5px;
    padding-left: 55px;
`

export const Input = styled.input`
    width: 400px;
    height: 38.32px;
    background: #FFFFFF;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;
    border: ${props => props.error ? '2px solid #CC1717' : 'none'};
    padding-left: 10px;
    display: flex;
    align-self: center;
`
export const SignInLink = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    margin-left: 55px;

    a {
        text-decoration: underline;
        cursor: pointer;
    }
`