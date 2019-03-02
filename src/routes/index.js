import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import loadable from 'react-loadable';

import Layout from '../layouts/Layout';
import Loading from '../layouts/Loading';

import {publicRoutes} from './routes';

export default() => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    {
                        publicRoutes.length > 0 ? 
                            publicRoutes.map((route, index) => {
                                return (
                                    <Route {...route} key={index} />
                                )
                            }) :
                            <div> No Content ... </div>
                    }

                    <Route 
                    component={
                        loadable({
                            loader: () => import('../modules/error/Error404'),
                            loading: Loading
                        })
                    }/> 
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}