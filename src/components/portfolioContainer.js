import React, { Component } from 'react';
// import axios from 'axios'

import PortfolioItem from './portfolioItem';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTile: 'Welcome to portfolio module!',
            isLoading: false,
            data: []
        }
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div className='home-page-wrapper'>
                <div className='portfolio-items-wrapper'>
                    <PortfolioItem/>
                </div>
            </div>
        )
    }
}