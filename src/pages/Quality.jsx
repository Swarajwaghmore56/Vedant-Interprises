import { Link } from "react-router-dom";

function Quality() {
    return (
        <div className="quality-page">

            <section className="inner-hero">

                <span className="section-tag">
                    QUALITY ASSURANCE
                </span>

                <h1>
                    Quality You Can Depend On
                </h1>

                <p>
                    A quality-focused approach to reliable sheet metal
                    press tool manufacturing.
                </p>

            </section>


            <section className="quality-intro">

                <div className="container-fluid">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">

                            <div className="quality-visual">

                                <i className="bi bi-patch-check"></i>

                                <h3>
                                    QUALITY FIRST
                                </h3>

                                <p>
                                    Precision • Consistency • Reliability
                                </p>

                            </div>

                        </div>


                        <div className="col-lg-6">

                            <span className="section-tag">
                                OUR QUALITY APPROACH
                            </span>

                            <h2 className="inner-heading">
                                Consistent Quality
                                At Every Stage
                            </h2>

                            <p className="inner-description">
                                Quality is an important part of Vedant
                                Enterprises' manufacturing approach. We focus
                                on maintaining precision and consistency from
                                tooling production through final inspection.
                            </p>

                            <p className="inner-description">
                                Our processes are designed to support reliable
                                sheet metal press tools that meet defined
                                customer requirements and dimensional
                                expectations.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            <section className="quality-pillars">

                <div className="container-fluid">

                    <div className="home-section-heading">

                        <span className="section-tag">
                            QUALITY PILLARS
                        </span>

                        <h2>
                            Our Commitment To Quality
                        </h2>

                    </div>


                    <div className="row g-4">

                        <div className="col-lg-3 col-md-6">

                            <div className="quality-card">

                                <i className="bi bi-bullseye"></i>

                                <h3>
                                    Precision
                                </h3>

                                <p>
                                    Focus on accurate tooling manufacturing
                                    and consistent dimensional requirements.
                                </p>

                            </div>

                        </div>


                        <div className="col-lg-3 col-md-6">

                            <div className="quality-card">

                                <i className="bi bi-check2-circle"></i>

                                <h3>
                                    Inspection
                                </h3>

                                <p>
                                    Measurement and inspection practices help
                                    verify tooling quality before delivery.
                                </p>

                            </div>

                        </div>


                        <div className="col-lg-3 col-md-6">

                            <div className="quality-card">

                                <i className="bi bi-arrow-repeat"></i>

                                <h3>
                                    Consistency
                                </h3>

                                <p>
                                    Focus on repeatable manufacturing processes
                                    and dependable tooling output.
                                </p>

                            </div>

                        </div>


                        <div className="col-lg-3 col-md-6">

                            <div className="quality-card">

                                <i className="bi bi-hand-thumbs-up"></i>

                                <h3>
                                    Reliability
                                </h3>

                                <p>
                                    Press tools are developed with dependable
                                    performance and practical production
                                    requirements in mind.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="quality-process">

                <div className="container-fluid">

                    <div className="row g-5 align-items-center">

                        <div className="col-lg-6">

                            <span className="section-tag">
                                QUALITY PROCESS
                            </span>

                            <h2 className="inner-heading">
                                Quality Control
                                From Start To Finish
                            </h2>

                            <p className="inner-description">
                                Our quality approach is integrated into the
                                tooling manufacturing workflow rather than
                                being limited to final inspection.
                            </p>

                        </div>


                        <div className="col-lg-6">

                            <div className="quality-check-list">

                                <div>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Raw Material Verification
                                </div>

                                <div>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Production Process Monitoring
                                </div>

                                <div>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Dimensional Inspection
                                </div>

                                <div>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Final Quality Check
                                </div>

                                <div>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Packaging & Dispatch Verification
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="quality-cta">

                <div className="container">

                    <div className="cta-content">

                        <span>
                            QUALITY MATTERS
                        </span>

                        <h2>
                            Looking For Reliable
                            Sheet Metal Press Tools?
                        </h2>

                        <p>
                            Discuss your tooling requirements with our team.
                        </p>

                        <Link
                            to="/contact"
                            className="cta-btn"
                        >
                            Get In Touch
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Quality;
