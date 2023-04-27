import React from 'react'

import { Container, ContainerItems } from './styles'
import Orders from './orders'
import ListProducts from './listproducts'
import { SideMenuAdmin } from '../../components/SideMenuAdmin'
import PropTypes from 'prop-types'
import paths from '../../constants/paths'

export function Admin({ match: { path } }) {



    return (
        <Container>
            <SideMenuAdmin path={path} />
            <ContainerItems>
                {path === paths.order && <Orders />}
                {path === paths.products && <ListProducts />}
            </ContainerItems>
        </Container>
    )
}

Admin.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string
    })
}