import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { useUser } from '../../hooks/UserContext'

import api from '../../services/api'

import { Button, ErrorMessage } from '../../components'
import LoginImg from '../../assets/login-img.svg'
import Logo from '../../assets/logo.svg'

import { Container, LoginImage, ContainerItems, Label, Input, SignInLink } from './styles'

export function Login() {

    const history = useHistory()

    const { putUserData } = useUser()

    const schema = yup.object().shape({
        email: yup.string().email('Digite um e-mail válido.').required('Campo obrigatório.'),
        password: yup.string().required('Campo obrigatório.').min(6, 'Senha deve ter ao menos seis dígitos.')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async clientData => {
        const { data } = await toast.promise(
            api.post('sessions', {
                email: clientData.email,
                password: clientData.password
            }),
            {
                pending: 'Verificando...',
                success: 'Tudo certo!',
                error: 'Verifique seus dados.'
            }
        )

        putUserData(data)

        setTimeout(() => {
            if (data.admin) {
                history.push('/pedidos')
            } else {
                history.push('/')
            }
        }, 1000)

    }

    return (
        <Container>
            <LoginImage src={LoginImg} alt='login-image' />
            <ContainerItems>
                <img src={Logo} alt='logo' />
                <h1>Login</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input type='email' {...register('email')} error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input type='password' {...register('password')} error={errors.password?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Button type='submit' style={{ marginTop: 68, marginBottom: 28, marginLeft: 52 }}>Sign In</Button>
                </form>
                <SignInLink>Não possui conta? <Link style={{ color: 'white' }} to='/cadastro'>Cadastrar.</Link></SignInLink>
            </ContainerItems>

        </Container>
    )
}