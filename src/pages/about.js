import React from 'react'
import Layout from '../components/Layout'

export default function About() {
    const TitleAbout = "About Us"
    const Decriptionabout = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "
    return (
        <Layout>            
        <section className="servicessec servicealllisting">
            <div className="container">
                <div className="header-box">
                    <h2>{ TitleAbout }</h2>
                    <p>{ Decriptionabout }</p>
                </div>
            </div>
        </section>
        </Layout>
    )
}
