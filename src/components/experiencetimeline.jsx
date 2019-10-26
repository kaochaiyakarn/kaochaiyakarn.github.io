import React, { Component } from 'react'
export default class Experiencetimeline extends Component{
    render(){
        return(
            <div>
                <section className="colorlib-experience" data-section="experiencetimeline">
                <div className="colorlib-narrow-content">
                    <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        {/* <span className="heading-meta">highlights</span> */}
                        <h2 className="colorlib-heading animate-box">Experience Timeline</h2>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="timeline-centered">
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                            <div className="timeline-entry-inner">
                            <div className="timeline-icon color-2">
                                <i className="icon-pen2" />
                            </div>
                            <div className="timeline-label">
                                <h2>Internship Research and Develop software in Software Engineering <span>  Jun2019 – Aug 2019 </span></h2>
                                <h5>Monash University, Faculty of Information Technology</h5>
                                <ul>
                                    <li>International Internship Program at Monash University, Melbourne, Australia</li>
                                    <li>Project: An AI-Driven Continuous Code Quality Inspection(BugHunter)</li>
                                    <li>The project involves Machine learning, GitHub Bot and Angular website develop platform.</li>
                                </ul>
                            </div>
                            </div>
                        </article>
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                            <div className="timeline-entry-inner">
                            <div className="timeline-icon color-5">
                                <i className="icon-pen2" />
                            </div>
                            <div className="timeline-label">
                                <h2>Junior Al Competition at Faculty of ICT Mahidol University <span>  Dec 2018</span></h2>
                                <p>First place Othello AL Competition from 22 groups (Internal Competition)</p>
                            </div>
                            </div>
                        </article>
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                            <div className="timeline-entry-inner">
                            <div className="timeline-icon color-4">
                                <i className="icon-pen2" />
                            </div>
                            <div className="timeline-label">
                                <h2>Work and Travel Program<span>  May2018 – Aug 2018</span></h2>
                                <p>Crew member of McDonald at Alabama, United state</p>
                            </div>
                            </div>
                        </article>
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                            <div className="timeline-entry-inner">
                            <div className="timeline-icon color-4">
                                <i className="icon-pen2" />
                            </div>
                            <div className="timeline-label">
                                <h2>Hackathon<span>  Sep 2016</span></h2>
                                <p>Co-Project Manager in Hackathon Competition at Faculty of ICT, Mahidol University (Over night).</p>
                            </div>
                            </div>
                        </article>
                        {/* <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                            <div className="timeline-entry-inner">
                            <div className="timeline-icon color-none">
                            </div>
                            </div>
                        </article> */}
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}