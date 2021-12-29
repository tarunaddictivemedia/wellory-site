import React from 'react'

export default function Foodmodule() {
    const Titlefood = "In a relationship with:food"
    return (
        <section className="servicessecrelation product-info-sec">
            <div className="container">
                <div className="header-box">
                    <h2>{ Titlefood }</h2>
                </div>
                <div class="flex-box sec-row">
                    <div class="product-info-box">
                        <div class="product-info-content">
                            <p>Match to your Wellory <strong>Nutrition Coach.</strong></p>
                        </div>
                        <div class="product-info-content">
                            <p>ongoing support from your <strong>Wellory Nutrition Coach.</strong></p>
                        </div>
                    </div>
                    <div class="product-info-middle-box">
                        <div class="product-info-image">
                        <img src="/imgfood.png" alt="food" />
                        </div>
                    </div>
                    <div class="product-info-box">
                        <div class="product-info-content">
                            <p>Share photos of what's on your plate and <strong>get advice when you need it, not judgment.</strong></p>
                        </div>
                        <div class="product-info-content">
                            <p>Stick to your <strong>personalized plan</strong></p>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    )
}

