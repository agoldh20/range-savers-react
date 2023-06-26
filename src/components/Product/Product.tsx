import React from 'react';
import './Product.scss';
import image1 from '../../assets/images/Resized_20210624_201532.jpeg';
import image2 from '../../assets/images/Resized952021062495201623.jpg';
import image3 from '../../assets/images/Resized_20200804_202619_97994044766314.jpeg';
import image4 from '../../assets/images/Resized_20210624_201606.jpeg';


const Product = (): JSX.Element => (
    <div className="product">
        <section className="page-section">
            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={image1} className="d-block w-100" alt="image1" />
                        </div>
                        <div className="carousel-item">
                            <img src={image2} className="d-block w-100" alt="image2" />
                        </div>
                        <div className="carousel-item">
                            <img src={image3} className="d-block w-100" alt="image3" />
                        </div>
                        <div className="carousel-item">
                            <img src={image4} className="d-block w-100" alt="image4" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <br/>
            </div>
        </section>
    </div>
);

export default Product;
