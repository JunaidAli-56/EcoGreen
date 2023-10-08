import React from 'react'
const ServicesCard = ({ title, description, icon }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3 service-card">
            <div class="card border-0 cards p-2">
                <div>
                    <div class="icon-bg">
                        {icon}
                    </div>
                </div>
                <div class="card-body card-data">
                    <h2 class="card-title">{title}</h2>
                    <p class="card-text text-gray">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard