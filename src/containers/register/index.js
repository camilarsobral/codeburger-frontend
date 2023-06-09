import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import api from '../../services/api'

import { Button, ErrorMessage } from '../../components'
import RegisterImg from '../../assets/register-img.svg'
import Logo from '../../assets/logo.svg'

import { Container, RegisterImage, ContainerItems, Label, Input, SignInLink } from './styles'

export function Register() {

    const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório.'),
        email: yup.string().email('Digite um e-mail válido.').required('Campo obrigatório.'),
        password: yup.string().required('Campo obrigatório.').min(6, 'Senha deve ter ao menos seis dígitos.'),
        confirmPassword: yup.string().required('Campo obrigatório.').oneOf([yup.ref('password')], 'As senhas devem ser iguais.')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async clientData => {

        try {

            const { status } = await api.post('users', {
                name: clientData.name,
                email: clientData.email,
                password: clientData.password
            }, { validateStatus: () => true }
            )

            if (status === 201 || status === 200) {
                toast.success('Cadastro criado com sucesso!')
            } else if (status === 409) {
                toast.error('E-mail já cadastrado! Faça login para continuar.')
            } else {
                throw new Error()
            }

        } catch (error) {
            toast.error('Algo deu errado! Tente novamente.')
        }
    }

    return (
        <Container>
            <RegisterImage src={RegisterImg} alt='register-image' />
            <ContainerItems>
                <img src={Logo} alt='logo' />
                <h1>Cadastre-se</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Nome</Label>
                    <Input type='text' {...register('name')} error={errors.name?.message} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <Label>Email</Label>
                    <Input type='email' {...register('email')} error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input type='password' {...register('password')} error={errors.password?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Label>Confirmar senha</Label>
                    <Input type='password' {...register('confirmPassword')} error={errors.confirmPassword?.message} />
                    <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

                    <Button type='submit' style={{ marginTop: 50, marginBottom: 28, marginLeft: 52 }}>Cadastrar</Button>
                </form>
                <SignInLink>Já possui conta? <Link style={{ color: 'white' }} to='/login'>Entrar.</Link></SignInLink>
            </ContainerItems>

        </Container>
    )
}
