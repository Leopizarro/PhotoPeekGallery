import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

const Slider = () => {

    
    const tooglesGroupId = 'Toggles';
    const valuesGroupId = 'Values';
    const mainGroupId = 'Main';

    const getConfigurableProps = () => ({
        showArrows: boolean('showArrows', true, tooglesGroupId),
        showStatus: boolean('showStatus', false, tooglesGroupId),
        showIndicators: boolean('showIndicators', true, tooglesGroupId),
        infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
        showThumbs: boolean('showThumbs', false, tooglesGroupId),
        useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
        autoPlay: boolean('autoPlay', true, tooglesGroupId),
        stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
        swipeable: boolean('swipeable', true, tooglesGroupId),
        dynamicHeight: boolean('dynamicHeight', false, tooglesGroupId),
        emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
        thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
        selectedItem: number('selectedItem', 0, {}, valuesGroupId),
        interval: number('interval', 3000, {}, valuesGroupId),
        transitionTime: number('transitionTime', 150, {}, valuesGroupId),
        swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
    });

    return (
        <div className='carousel-container'>
            <Carousel {...getConfigurableProps()}>
                <div className='carousel-wrap' style={{ height: 60 + 'vh', width: 100 + 'vh'}}>
                    <img src="https://images.unsplash.com/photo-1513206057392-e565592cbaa6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1434&q=80" />
                    <p className="legend">Legend 1</p>
                </div>
                <div className='carousel-wrap' style={{ height: 60 + 'vh', width: 100 + 'vh'}}>
                    <img src="https://images.unsplash.com/photo-1563009400-c01f7db40072?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1459&q=80" />
                    <p className="legend">Legend 2</p>
                </div>
                <div className='carousel-wrap' style={{ height: 60 + 'vh', width: 100 + 'vh'}}>
                    <img src="https://tpy-urbancolors.com/images/TPY%20Black%2024%20Plus%20Pack%20front.top%20.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Slider;