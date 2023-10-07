import React from 'react'
import HeadingComponent from './HeadingComponent'

const TopNav = () => {
    return (
        <div className="container-fluid bg-dark">
            <div className="container">
                <div className="row py-3">
                    <div className="col-3">
                        <HeadingComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav