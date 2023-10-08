import React from 'react'
import { FaLeaf } from 'react-icons/fa'

const SubscribeBox = () => {
    return (
        <div className="container-fluid p-0 bg-primary">
            <div className="container py-5 subscribe-conatiner">
                <div className="row d-flex justify-content-between align-items-center px-5">
                    <div className="col-lg-8 col-md-8 col-sm-12 content-box">
                        <p>NEWSLETTER</p>
                        <h1>Subscribe for Newsletter</h1>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-end my-4 my-lg-0">
                        <div class="button-box">
                            <button className="button">
                                SUBSCRIBE NOW!
                            </button>
                            <FaLeaf className='leaf' size={25} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeBox