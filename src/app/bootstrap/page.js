'use client'
const Page = () => {
    return (
        <div>
            {/*container er vitor ekekta row,row er vitor ekek ta column,col-12 rule mene chole,row column hisebe chinta kora dorkar*/}
            <div className={"container"}>
                <div className={"row bg-success "}>
                    <div className={"col"}>First Name</div>
                    <div className={"col"}>Last Name</div>
                    <div className={"col"}>Mobile Number</div>
                </div>

                <div className={"row"}>
                    <div className={"col"}>Mohammad</div>
                    <div className={"col"}>Ahasan</div>
                    <div className={"col"}>000000000</div>
                </div>

                <div className={"row"}>
                    <div className={"col"}>Mohammad</div>
                    <div className={"col"}>Ahasan2</div>
                    <div className={"col"}>00000000</div>
                </div>
                <div className={'row'}>
                    <div className={"col-5"}>Mohammad
                        <img src={"https://placehold.co/600x400/000000/FFFFFF.png"} alt="image"/>
                    </div>
                </div>
            </div>

            {/*table toiri*/}
            <table className={"table table-striped table-bordered table-hover"}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mohammad Ahasan</td>
                    <td>ahasan@gmail.com</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Mohammad Ahasan</td>
                    <td>ahasan@gmail.com</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Mohammad Ahasan</td>
                    <td>ahasan@gmail.com</td>
                </tr>
                </tbody>
            </table>

            {/*different type input toirir process*/}
            <form>

            <label className={'form-label'}>Email Address</label>
            <input className={"form-control"} type={"email"} placeholder={"a@gmail.com"}/><br/>

            <label className={'form-label'}>Example text areas</label>
            <textarea className={'form-control'} rows={5} readOnly={true}></textarea><br/>

            <label className={'form-label'}>Default file input example</label>
            <input type={'file'} className={'form-control'} disabled={true}/><br/>

            <select className={'form-select'}>
                <option value={1}>one</option>
                <option value={2} selected={true}>two</option>
                <option value={3}>three</option>
            </select><br/>

            <div className="form-check">
                <input className={'form-check-input'} type={'checkbox'}/>
                <label className={'form-check-label'}>apple</label>
            </div>
            <div className="form-check">
                <input className={'form-check-input'} type={'checkbox'}/>
                <label className={'form-check-label'}>banana</label>
            </div><br/>

            <div className="form-check">
                <input className={'form-check-input'} type={'radio'} name={'gender'} id={'male'}/>
                <label className={'form-check-label'} htmlFor={'male'}>male</label>
            </div>
            <div className="form-check">
                <input className={'form-check-input'} type={'radio'} name={'gender'} id={'female'}/>
                <label className={'form-check-label'} htmlFor={'female'}>female</label><br/>
            </div>

            <input type={'range'} className={'form-range'}/>
            <input type={'range'} className={'form-range'} min={'0'} max={'10'}/>
            <input type={'range'} className={'form-range'} min={'0'} max={'10'} step={'0.5'}/>
            <input type={'range'} className={'form-range'} disabled/>


            </form>


            {/*alert*/}
            <div className={'alert alert-danger'} role={'alert'}>A simple alert</div><br/>

            {/*button*/}
            <button type={'button'} className={'btn btn-primary'}>Click me</button>
            <button type={'button'} className={'btn btn-outline-primary'}>Click me</button><br/>

            <div className={'btn-group'}>
                <button type={'button'} className={'btn btn-primary'}>Left</button>
                <button type={'button'} className={'btn btn-close-white'}>1</button>
                <button type={'button'} className={'btn btn-close-white'}>2</button>
                <button type={'button'} className={'btn btn-close-white'}>3</button>
                <button type={'button'} className={'btn btn-primary'}>Right</button>
            </div><br/>


            {/*card*/}
            <div className={'card'} style={{"width": "300px"}}>
                {/*   card head   */}
                <img src={"https://placehold.co/600x400/000000/FFFFFF.png"} alt="image" className={'card-img-top'}/>
                {/*    card body*/}
                <div className={'card-body'}>
                    <h5 className={'card-title'}>Card title</h5>
                    <p className={'card-text'}>Some quick example text to build on the card title</p>
                    <a href={"#"} className={"btn btn-primary"}>Go somewhere</a>
                </div>

            </div><br/>

            {/*dropdown*/}
            <div className={'dropdown'}>
                <button className={'btn btn-info dropdown-toggle'} data-bs-toggle={"dropdown"}>Dropdown</button>
                <ul className={'dropdown-menu'}>
                    <li><a href={"#"} className={'dropdown-item'}>Action</a></li>
                    <li><a href={"#"} className={'dropdown-item'}>Another Action</a></li>
                    <li><a href={"#"} className={'dropdown-item'}>Something else here</a></li>
                </ul>
            </div><br/>

            <div className={'spinner-border text-warning'}>
                <span className={'visually-hidden'}>Loading...</span>
            </div>

            <div className={'spinner-grow text-warning'}>
                <span className={'visually-hidden'}>Loading...</span>
            </div><br/>

            <div className={'progress'}>
                <div className={'progress-bar'} style={{"width": "60%"}}>
                </div>
            </div><br/>


            <div className="placeholder-glow">
                <span className="placeholder" style={{width: "40%"}}></span>
                <span className="placeholder" style={{width: "50%"}}></span>
                <span className="placeholder" style={{width: "50%"}}></span>
                <span className="placeholder" style={{width: "50%"}}></span>
            </div><br/><br/>
            <div className="placeholder-wave">
                <span className="placeholder placeholder-xs col-12"></span>
                <span className="placeholder placeholder-sm col-9"></span>
                <span className="placeholder placeholder-lg placeholder-xs col-11"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-10"></span>
            </div><br/>

            {/*click kore ek page teke onno page jete*/}
            <nav>
                <ul className={'pagination'}>
                    <li className={'page-item'}><a className={'page-link'} href={'#'}>Previous</a></li>
                    <li className={'page-item'}><a className={'page-link'} href={'#'}>1</a></li>
                    <li className={'page-item active'}><a className={'page-link'} href={'#'}>2</a></li>
                    <li className={'page-item'}><a className={'page-link'} href={'#'}>3</a></li>
                    <li className={'page-item'}><a className={'page-link'} href={'#'}>Next</a></li>
                </ul>
            </nav><br/>


            {/*button e click kore kichu show korate*/}
            <button className={'btn btn-primary'} data-bs-toggle={'offcanvas'} data-bs-target={'#offcanvas'}>
                Toggle
            </button>
            <div className={'offcanvas offcanvas-top '} tabIndex={-1} id='offcanvas' >
                <div className={'offcanvas-header'}>
                    <h5 className={'offcanvas-title'}>offcanvas</h5>
                    <button className={'btn-close'} data-bs-dismiss={'offcanvas'}></button>

                </div>
                <div className={'offcanvas-body'}>

                </div>
            </div><br/>

            {/*button e click kore kichu show korate*/}
            <button className={'btn btn-primary'} data-bs-toggle={'modal'} data-bs-target={'#modal'}>Lunch Modal</button>
            <div className={'modal fade'} tabIndex={-1} id='modal' >
                <div className={'modal-dialog'}>
                    <div className={'modal-content'}>
                        <div className={'modal-header'}>
                            <h1 className={'modal-title'}>Modal title</h1>
                            <button className={'btn-close'} data-bs-dismiss={'modal'}></button>
                        </div>
                        <div className={'modal-body'}></div>
                        <div className={'modal-footer'}>
                            <button className={'btn btn-secondary'} data-bs-dismiss={'modal'}>Close</button>
                            <button className={'btn btn-primary'}> save changes</button>
                        </div>
                    </div>
                </div>
            </div><br/>


            {/*click kore onno page jete*/}
            <nav >
                <div className={'nav nav-tabs'} >
                    <button className={'nav-link active'} data-bs-toggle={'tab'} data-bs-target={'#home'}>Home</button>
                    <button className={'nav-link'} data-bs-toggle={'tab'} data-bs-target={'#profile'}>Profile</button>
                    <button className={'nav-link'} data-bs-toggle={'tab'} data-bs-target={'#contact'}>Contact</button>
                </div>
            </nav>
            <div className={'tab-content'}>
                <div className={'tab-pane show active'} id={'home'}> This is home tab</div>
                <div className={'tab-pane' } id={'profile'}> This is profile tab</div>
                <div className={'tab-pane'} id ='contact'> This is contact tab</div>
            </div><br/>

            {/*arek ta navbar tin somantoral line diye*/}
            <nav className={'navbar  navbar-expand-lg shadow-lg'} >
                <div className={'container-fluid'}>
                    <button className={'navbar-toggler'} data-bs-toggle={'collapse'} data-bs-target={'#collapse'}>
                        <span className={'navbar-toggler-icon'}></span>
                    </button>
                    <a className={'navbar-brand'} href={'#'}>Navbar</a>

                    <div className={'collapse navbar-collapse'} id='collapse'>
                        <ul className={'navbar-nav'}>
                            <li className={'nav-item'}><a className={'nav-link'} href={'#'}>Home</a></li>
                            <li className={'nav-item'}><a className={'nav-link'} href={'#'}>Link</a></li>
                        </ul>
                    </div>

                    <form className={'d-flex'} role={'search'}>
                        <input className={'form-control me-1'} placeholder={'Search'}/>
                        <button className={'btn btn-outline-success'} type={'submit'}> Search</button>

                    </form>

                </div>
            </nav><br/>

            <span className={'border text-primary'}>first</span>
            <span className={'border-top text-primary-emphasis'}>second</span>
            <span className={'border-start text-body-secondary text-bg-info'}>third</span>
            <span className={'border-end text-danger text-opacity-25 bg-body-tertiary'}>fourth</span>

<br/><br/>
            <span className={'align-baseline'}>baseline</span>
            <span className={'align-top'}>top</span>
            <span className={'align-middle'}>middle</span>
            <span className={'align-bottom'}>bottom</span>
            <span className={'align-text-top'}>text-top</span>
            <span className={'align-text-bottom'}>text-bottom</span>


           <img src={"https://placehold.co/600x400/000000/FFFFFF.png"} alt="Image" className="rounded"/>
            <img src={"https://placehold.co/600x400/000000/FFFFFF.png"} alt="Image" className="rounded-5"/>
            <img src={"https://placehold.co/600x400/000000/FFFFFF.png"} alt="Image" className="rounded-pill"/>

        </div>

    );

};

export default Page;