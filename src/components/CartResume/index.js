import React, { useState, useEffect } from 'react'
import { useCart } from '../../hooks/CartContext'
import { Container } from './styles'
import { Button } from '../Button'
import formatCurrency from '../../utils/formatCurrency'
import api from '../../services/api'
import { toast } from 'react-toastify'

export function CartResume() {

    const [finalPrice, setFinalPrice] = useState(0)
    const [deliveryFee] = useState(5)

    const { cartProducts } = useCart()

    useEffect(() => {

        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)

        setFinalPrice(sumAllItems)
    }, [cartProducts, deliveryFee])

    const submitOrder = async () => {
        const order = cartProducts.map(product => {
            return {
                id: product.id,
                quantity: product.quantity
            }
        })

        await toast.promise(api.post('orders', { products: order }), {
            pending: 'Realizando o seu pedido...',
            success: 'Pedido realizado com sucesso.',
            error: 'Erro ao realizar o pedido.'
        })
    }

    return (
        <div>
            <Container>
                <div className='container-top'>
                    <h2 className='title'>Resumo do pedido</h2>
                    <p className='items'>Itens</p>
                    <p className='items-price'>{formatCurrency(finalPrice)}</p>
                    <p className='delivery'>Taxa de entrega</p>
                    <p className='delivery-fee'>{formatCurrency(deliveryFee)}</p>
                </div>
                <div className='container-bottom'>
                    <p>Total</p>
                    <p>{formatCurrency(finalPrice + deliveryFee)}</p>
                </div>
            </Container>
            <Button style={{ width: '100%', marginTop: 30 }} onClick={submitOrder}>Finalizar pedido</Button>
        </div>
    )
}