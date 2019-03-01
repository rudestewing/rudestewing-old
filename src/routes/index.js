import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Loadable from 'react-loadable';

import Layout from '../layouts/Layout';
import Loading from '../layouts/Loading';

export default () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" 
                    component={
                        Loadable({
                            loader: () => import('../pages/home/Home'),
                            loading: Loading
                        })  
                    }/>
                    
                    <Route exact path="/about"
                    component={
                        Loadable({
                            loader: () => import('../pages/about/About'),
                            loading: Loading
                        })
                    }/>

                    <Route exact path="/collection"
                    component={
                        Loadable({
                            loader: () => import('../pages/collection/Collection'),
                            loading: Loading
                        })
                    }/>
                    
                    <Route 
                    component={
                        Loadable({
                            loader: () => import('../pages/error/Error404'),
                            loading: Loading
                        })
                    }/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}