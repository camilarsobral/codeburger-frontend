import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import paths from '../../constants/paths'

const listLinks = [
    {
        id: 1,
        label: 'Pedidos',
        link: paths.order,
        icon: ShoppingBagIcon
    },
    {
        id: 2,
        label: 'Produtos',
        link: paths.products,
        icon: ShoppingCartIcon
    },
    {
        id: 3,
        label: 'Novo produto',
        link: paths.newProduct,
        icon: AddCircleIcon
    },
    // {
    //     id: 4,
    //     label: 'Editar',
    //     link: paths.editProducts,
    //     icon: ShoppingBagIcon
    // },
]

export default listLinks