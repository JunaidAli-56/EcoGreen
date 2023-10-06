import React from 'react'
import { FaLeaf } from 'react-icons/fa'

const SubscribeBox = () => {
    return (
        <div className="container bg-primary py-5">
            <div className="row d-flex justify-content-between align-items-center px-5">
                <div className="col-8 content-box">
                    <p>NEWSLETTER</p>
                    <h1>Subscribe for Newsletter</h1>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <div class="last-div-button">
                        <button className="call">
                            SUBSCRIBE NOW!
                        </button>
                        <FaLeaf className='leaf' size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeBox