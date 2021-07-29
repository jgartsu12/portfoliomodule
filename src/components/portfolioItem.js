import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class PortfolioItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolioItemClass: ''
        };
    }

    handleMouseEnter() {
        this.setState({ portfolioItemClass: 'image-blur' })
    }

    handleMouseLeave() {
        this.setState({ portfolioItemClass: '' })
    }

    render() {
       // const { description, image_url } = this.props.item; //may need to add id later
        return (
            <div className='portoflio-item-wrapper'>
                <p>This is a test item!</p>
            </div>
           /* <div 
                className='portfolio-item-wrapper'
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}
            >
                <div
                    className={
                        'portfolio-image-background ' + this.state.portfolioItemClass
                    }
                    style={{
                        backgroundImage: "url(" + image_url + ")"
                    }}
                />

                <div className="subtitle">{description}</div>
            </div> */
        );
    }
}