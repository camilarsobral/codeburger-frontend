import React, { useEffect, useState } from 'react'
import Offers from '../../assets/offers.png'
import api from '../../services/api'
import { Container, CategoryImg, ContainerItems, Image, Button } from './styles'
import { useCart } from '../../hooks/CartContext'
import Carousel from 'react-elastic-carousel'
import formatCurrency from '../../utils/formatCurrency'
import { useHistory } from 'react-router-dom'

export function OffersCarousel() {

    const [offers, setOffers] = useState([])
    const { putProductInCart } = useCart()
    const { push } = useHistory()

    useEffect(() => {

        async function loadOffers() {
            const { data } = await api.get('products')

            const onlyOffers = data.filter(product => product.offer).map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price) }
            })

            setOffers(onlyOffers)
        }

        loadOffers()
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 5 },
    ]

    return (
        <Container>
            <CategoryImg src={Offers} alt='logo-offers' />
            <Carousel itemsToShow={5} style={{ width: '90%' }} breakPoints={breakPoints} >
                {
                    offers && offers.map(product => (
                        <ContainerItems key={product.id}>
                            <Image src={product.url} alt='offer-img' />
                            <p>{product.name}</p>
                            <p>{product.formatedPrice}</p>
                            <Button onClick={() => {
                                putProductInCart(product)
                                push('/carrinho')
                            }}>Peça agora</Button>
                        </ContainerItems>
                    ))
                }
            </Carousel>
        </Container>
    )
}