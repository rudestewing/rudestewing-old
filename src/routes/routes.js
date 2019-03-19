import loadable from 'react-loadable';
import Loading from '../layouts/Loading';

export const publicRoutes = [
    {
        exact: true,
        path: '/',
        component: loadable({
            loader: () => { return import('../modules/home/Home') },
            loading: Loading
        })
    },
    {
        exact: true,
        path: '/about',
        component: loadable({
            loader: () => { return import('../modules/about/About') },
            loading: Loading
        })
    },
    {
        exact: true,
        path: '/article',
        component: loadable({
            loader: () => { return import('../modules/article/Article') },
            loading: Loading
        })
    },
    {
        exact: true,
        path: '/collection',
        component: loadable({
            loader: () => { return import('../modules/collection/Collection') },
            loading: Loading
        })
    },
    {
        exact: true,
        path: '/collection/detail/:id',
        component: loadable({
            loader: () => { return import('../modules/collection/CollectionDetail') },
            loading: Loading
        })
    },
]

export const privateRoutes = [
    
]