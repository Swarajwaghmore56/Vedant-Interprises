import { Link } from "react-router-dom";

function Industries() {
    return (
        <div className="industries-page">

            <section className="inner-hero">

                <span className="section-tag">
                    INDUSTRIES WE SERVE
                </span>

                <h1>
                    Supporting Diverse Industries
                </h1>

                <p>
                    Sheet metal press tooling solutions for different
                    engineering and manufacturing applications.
                </p>

            </section>


            <section className="industries-intro">

                <div className="container-fluid">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">

                            <div className="industry-main-visual">

                                <i className="bi bi-gear-wide-connected"></i>

                                <h3>
                                    TOOLING SOLUTIONS
                                </h3>

                                <p>
                                    Press tools for different sheet metal
                                    manufacturing applications.
                                </p>

                            </div>

                        </div>


                        <div className="col-lg-6">

                            <span className="section-tag">
                                INDUSTRIAL EXPERIENCE
                            </span>

                            <h2 className="inner-heading">
                                Press Tools Designed
                                For Industrial Applications
                            </h2>

                            <p className="inner-description">
                                Vedant Enterprises specializes in sheet metal
                                press tools including forming, blanking,
                                piercing and bending tools for industrial
                                manufacturing requirements.
                            </p>

                            <p className="inner-description">
                                Our tooling solutions can support different
                                machinery, equipment and engineering
                                applications according to customer
                                requirements.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            <section className="industry-grid-section">

                <div className="container-fluid">

                    <div className="home-section-heading">

                        <span className="section-tag">
                            APPLICATION AREAS
                        </span>

                        <h2>
                            Industries & Applications
                        </h2>

                    </div>


                    <div className="row g-4">

                        <div className="col-lg-4 col-md-6">

                            <div className="industry-large-card">

                                <div className="industry-large-icon">
                                    <i className="bi bi-car-front"></i>
                                </div>

                                <h3>
                                    Automotive
                                </h3>

                                <p>
                                    Press tooling solutions for sheet metal
                                    components used in automotive
                                    manufacturing applications.
                                </p>

                                <span>
                                    INDUSTRY 01
                                </span>

                            </div>

                        </div>


                        <div className="col-lg-4 col-md-6">

                            <div className="industry-large-card">

                                <div className="industry-large-icon">
                                    <i className="bi bi-gear-wide-connected"></i>
                                </div>

                                <h3>
                                    Engineering
                                </h3>

                                <p>
                                    Tooling solutions for engineering
                                    machinery and industrial manufacturing
                                    applications.
                                </p>

                                <span>
                                    INDUSTRY 02
                                </span>

                            </div>

                        </div>


                        <div className="col-lg-4 col-md-6">

                            <div className="industry-large-card">

                                <div className="industry-large-icon">
                                    <i className="bi bi-truck"></i>
                                </div>

                                <h3>
                                    Heavy Machinery
                                </h3>

                                <p>
                                    Sheet metal tooling for demanding
                                    machinery and equipment manufacturing
                                    applications.
                                </p>

                                <span>
                                    INDUSTRY 03
                                </span>

                            </div>

                        </div>


                        <div className="col-lg-4 col-md-6">

                            <div className="industry-large-card">

                                <div className="industry-large-icon">
                                    <i className="bi bi-lightning-charge"></i>
                                </div>

                                <h3>
                                    Energy
                                </h3>

                                <p>
                                    Tooling solutions for sheet metal
                                    components used in energy-related
                                    equipment applications.
                                </p>

                                <span>
                                    INDUSTRY 04
                                </span>

                            </div>

                        </div>


                        <div className="col-lg-4 col-md-6">

                            <div className="industry-large-card">

                                <div className="industry-large-icon">
                                    <i className="bi bi-box-seam"></i>
                                </div>

                                <h3>
                                    Industrial Equipment
                                </h3>

                                <p>
                                    Press tools for industrial machines,
                                    equipment and production systems.
                                </p>

                                <span>
                                    INDUSTRY 05
                                </span>

                            </div>

                        </div>


                        <div className="col-lg-4 col-md-6">

                            <div className="industry-large-card">

                                <div className="industry-large-icon">
                                    <i className="bi bi-wrench-adjustable"></i>
                                </div>

                                <h3>
                                    Custom Tooling
                                </h3>

                                <p>
                                    Customized press tools developed around
                                    specific sheet metal component and
                                    production requirements.
                                </p>

                                <span>
                                    INDUSTRY 06
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="industry-cta">

                <div className="container">

                    <div className="cta-content">

                        <span>
                            CUSTOM REQUIREMENTS
                        </span>

                        <h2>
                            Have A Specific
                            Tooling Requirement?
                        </h2>

                        <p>
                            Share your press tool requirement with our team.
                        </p>

                        <Link
                            to="/contact"
                            className="cta-btn"
                        >
                            Discuss Your Requirement
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Industries;

