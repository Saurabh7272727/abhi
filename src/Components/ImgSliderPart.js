import React from 'react'
import './ImgSlider.css';

const ImgSliderPart = () => {


    return (
        <div className='rapper__box'>
            <div className='addversting__box'>
            </div>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active bs-c-red" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://image.made-in-china.com/321f0j00rEzYUPvaFQon/made-in-china.jpg" class="d-block w-100 h-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.shoesensation.com/media/wysiwyg/BOGO_Skechers_Promo.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-c1be/k2-_0379b133-6eec-4b95-802d-2b90a0ded076.v1.jpg?odnWidth=1360&odnHeight=410&odnBg=ffffff" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default ImgSliderPart;;