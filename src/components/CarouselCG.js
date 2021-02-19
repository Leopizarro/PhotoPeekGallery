import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

const SliderCG = () => {

    
    const tooglesGroupId = 'Toggles';
    const valuesGroupId = 'Values';
    const mainGroupId = 'Main';

    const getConfigurableProps = () => ({
        showArrows: boolean('showArrows', true, tooglesGroupId),
        showStatus: boolean('showStatus', false, tooglesGroupId),
        showIndicators: boolean('showIndicators', false, tooglesGroupId),
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
                    <img src="https://i2.wp.com/9to5google.com/wp-content/uploads/sites/4/2018/11/pixel_3_xl_31.jpg?w=1500&quality=82&strip=all&ssl=1" />
                    <h1>Legend 1</h1>
                </div>
            </Carousel>
        </div>
    )
}

export default SliderCG;