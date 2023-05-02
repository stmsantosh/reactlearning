import React from 'react'
import PropTypes from 'prop-types'
export default function Footer(props) {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">{props.description}</p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"></svg>
                </a>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="/" target="_blank" className="nav-link px-2 text-muted">{props.Link1}</a></li>
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">{props.Link2}</a></li>
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">{props.Link3}</a></li>
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">{props.Link4}</a></li>
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">{props.aboutText}</a></li>
                </ul>
            </footer>

        </>
    )
}
Footer.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
Footer.defaultProps = {
    homelink: "https://www.google.com/",
    Link1: "Home",
    Link2: "Features",
    Link3: "Pricing",
    Link4: "FAQs",
    aboutText: "santosh",
    description: "© 2023 Company, Inc",
    age: "45",
    santosh: "name"
}