import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default function Contact() {
    const Titlecontact = "CAll NOW"
    const Descriptioncontact = "9250721039546521"
    return (
       <Layout>            
        <section className="servicessec servicealllisting">
            <div className="container">
                <div className="header-box">
                    <h2>{ Titlecontact }</h2>
                    <p><Link to='tel:{ Descriptioncontact }'>+91{ Descriptioncontact }</Link></p>
                </div>
            </div>
        </section>
        </Layout>
    )
}
