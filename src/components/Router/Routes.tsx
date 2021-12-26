import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Layout } from 'antd';

import { App } from '../App';
import { MovieDetails } from '../MovieDetails';
import { AppTitle } from '../AppTitle';
import { Copyright } from '../Copyright';

const { Header, Content, Footer } = Layout;

const history = createBrowserHistory();

const Routes: React.FunctionComponent = () => {
    const resetAndGoHome = (): void => {
        history.push('/');
        window.location.reload();
    };

    return (
        <Layout className="layout">
            <Router>
                <Header style={{background: '#fff'}}>
                    <AppTitle onClick={resetAndGoHome} />
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <Route
                            exact
                            path={'/'}
                            component={App}
                        />
                        <Route path="/movie/:id" component={MovieDetails} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    <Copyright/>
                </Footer>
            </Router>
        </Layout>
    );
}

export { Routes };