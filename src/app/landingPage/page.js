import React from 'react';

const Page = () => {
    return (
        <div>
            <nav className={'navbar navbar-expand-lg container'}>
                <div className={'container-fluid'}>
                    <button className={'navbar-toggler'} data-bs-toggle={'collapse'} data-bs-target={'#collapse'}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className={'navbar-brand'}>Tech Solution</a>
                    <div className={'collapse navbar-collapse'} id='collapse'>
                        <ul className={'navbar-nav ms-auto '}>
                            <li className={'nav-item'}><a className={'nav-link active'} href={'#'}>Home</a></li>
                            <li className={'nav-item'}><a className={'nav-link'} href={'#features'}>Features</a></li>
                            <li className={'nav-item'}><a className={'nav-link'} href={'#pricing'}>Pricing</a></li>
                            <li className={'nav-item'}><a className={'nav-link'} href={"#Contact"}>Contact</a></li>
                        </ul>
                    </div>

                </div>
            </nav>
            <header className={'hero d-flex  align-items-center'}>
                <div className={'container '}>
                    <h1 className={'text-white fw-bold mb-3 fs-1'}>Innovative Software Solutions</h1>
                    <p className={'text-white h5 mb-3'}>Empowering business with cutting-edge technology</p>
                    <a className={'btn btn-primary btn-lg'}>Get Started</a>
                </div>

            </header>

            <section id={'features'} className={'pt-5'}>
                <div className={'container py-3'}>

                    <h1 className={'text-center fw-normal'}>Our Features</h1>
                    <div className={'row mt-4'}>
                        <div className={'col-4 text-center'}>
                            <i className="bi bi-gear mb-3 text-primary fs-2"></i>
                            <h1>Customizable</h1>

                            <p>Tailor our solutions to fit your unique business needs.</p>
                        </div>
                        <div className={'col-4 text-center'}>
                            <i className={'bi bi-graph-up mb-3 text-primary fs-2'}></i>
                            <h1>Scalable</h1>
                            <p>Grow your business with our valuable infrastructure</p>
                        </div>
                        <div className={'col-4 text-center'}>
                            <i className={'bi bi-shield-check text-primary fs-2'}></i>

                            <h1>Secure</h1>
                            <p>Rest easy with our top-notch security measures.</p>
                        </div>

                    </div>


                </div>
            </section>
            <section className={'bg-light py-5 '} id={'pricing'}>
                <div className={'container'}>
                    <h1 className={'text-center mb-5 fw-normal'}>Pricing Plans</h1>
                    <div className={'row'}>
                        <div className={'col-4 '}>
                            <div className={' card '}>
                                <div className={'card-header h3 fw-normal'}>Basic</div>
                                <div className={'card-body'}>
                                    <h2 className={'card-title '}>$20<small className={'text-muted fw-normal'}>/mo</small></h2>
                                    <ul className={'list-unstyled'}>
                                        <li>10 users included</li>
                                        <li>2 GB of storage</li>
                                        <li>Email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button className={'btn btn-outline-primary btn-lg w-100'}>Sign up for free</button>
                                </div>
                            </div>
                        </div>
                            <div className={'col-4'}>
                                <div className={' card '}>
                                    <div className={'card-header h3'}>Pro</div>
                                    <div className={'card-body'}>
                                        <h2 className={'card-title'}>$29<small className={'text-muted fw-normal'}>/weekly</small></h2>
                                        <ul className={'list-unstyled'}>
                                            <li>10 users included</li>
                                            <li>2 GB of storage</li>
                                            <li>Email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <button className={'btn btn-lg btn-primary w-100'}>Get Started</button>
                                    </div>
                                </div>
                            </div>
                        <div className={'col-4'}>
                            <div className={' card '}>
                                <div className={'card-header h3'}>Enterprise</div>
                                <div className={'card-body'}>
                                    <h2 className={'card-title'}>$299<small className={'text-muted fw-normal'}>/monthly</small></h2>
                                    <ul className={'list-unstyled'}>
                                        <li>10 users included</li>
                                        <li>2 GB of storage</li>
                                        <li>Email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button className={'btn btn-lg btn-primary w-100'}>Contact Us</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id={'Contact'} className={'bg-white'}>
                <h2 className={'fw-normal text-center mt-5'}>Contact Us</h2>
                <form className={'container w-75 '}>
                    <label className={'form-label'}>Name</label>
                    <input className={'form-control '} type='text'/>
                    <label className={'form-label mt-2'}>Email Address</label>
                    <input className={'form-control'} type='email'/>
                    <label className={'form-label mt-2'}>Message</label>
                    <textarea className={'form-control'} rows={6}/>
                    <button type={'submit'} className={'btn btn-primary mt-3'}>Send Messages</button>
                </form>
            </section>

            <footer className={'bg-dark p-5 mt-4'}>
                <div className={'container py-3'}>
                    <div className={'row'}>
                        <div className={'col-6'}>
                            <h2 className={'text-white'}>Tech Solutions</h2>
                            <p className={'text-white'}>Innovative software solutions for modern businesses.</p>
                        </div>
                        <div className={'col-6'}>

                            <h2 className={'text-white'}>Contact With Us</h2>
                            <a href={'#'} style={{textDecoration:"none"}}><i className={'bi bi-facebook text-white px-2 '}></i></a>
                            <a href={'#'}  style={{textDecoration:"none"}}><i className={'bi bi-twitter text-white px-2'}></i></a>
                           <a href={'#'}  style={{textDecoration:"none"}}> <i className={'bi bi-linkedin text-white px-2'}></i></a>
                           <a href={'#'}  style={{textDecoration:"none"}}> <i className={'bi bi-instagram text-white'}></i> </a>
                        </div>
                    </div>

                </div>
                <hr className={'text-white'}/>
                <div className={'row ms-5'}>
                    <div className={'col-10 '}>
                        <p className={'text-white'}>&copy; 2023 TechSolutions. All rights reserved.</p>
                    </div>
                    <div className={'col-2'}>
                        <ul className={'list-inline text-white'}>
                            <li className={'list-inline-item '}><a href={'#'} className={'text-white'}> Privacy Policy</a></li>
                            <li className={'list-inline-item '}><a href={'#'} className={'text-white'}> Terms of use</a></li>
                        </ul>
                    </div>

                </div>
            </footer>


        </div>
    );
};

export default Page;