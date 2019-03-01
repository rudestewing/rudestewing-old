import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Layout from '../layouts/Layout';

export default () => {

    return (
        <BrowserRouter>
            <Suspense fallback={<div> Loading ... </div>}>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={lazy(() => import('../pages/home/Home'))} />
                    </Switch>
                </Layout>
            </Suspense>
        </BrowserRouter>
    )
}