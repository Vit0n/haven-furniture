import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar/AppNavbar';
import Index from './components/AppPages/Index/Index';
import ShoppingCartAside from './components/UI/ShoppingCartAside/ShoppingCartAside';
import AppFooter from './containers/AppFooter/AppFooter';
import SearchModal from './components/SearchModal/SearchModal';

export default class App extends Component {
    state = {
        isCardAsideShown: false,
        isSearchModalShown: false,
    };

    componentDidMount() {
        document.title = 'Haven Furniture';
    }

    closeCardAsideHandler = () => {
        document.body.style.overflowY = 'scroll';
        this.setState({
            isCardAsideShown: false,
        });
    };

    openCardAsideHandler = () => {
        document.body.style.overflow = 'hidden';
        this.setState({
            isCardAsideShown: true,
        });
    };

    closeSearchModalHandler = () => {
        document.body.style.overflowY = 'scroll';
        this.setState({
            isSearchModalShown: false,
        });
    };

    openSearchModalHandler = () => {
        document.body.style.overflow = 'hidden';
        this.setState({
            isSearchModalShown: true,
        });
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <AppNavbar
                        openCardAside={this.openCardAsideHandler}
                        openSearchModal={this.openSearchModalHandler}
                    />
                    <Switch>
                        <Route path="/">
                            <Index />
                        </Route>
                    </Switch>
                    <AppFooter />

                    {this.state.isCardAsideShown ? (
                        <ShoppingCartAside closeCardAside={this.closeCardAsideHandler} />
                    ) : null}

                    {this.state.isSearchModalShown ? (
                        <SearchModal closeSearchModal={this.closeSearchModalHandler} />
                    ) : null}
                </div>
            </Router>
        );
    }
}
