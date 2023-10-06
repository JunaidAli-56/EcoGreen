import React from 'react'

const EventCards = ({ icon, title }) => {
    return (
        <div className="col-sm-12 col-md-4 col-lg-4 event-card my-3">
            <div className="card border-0">
                <div class="event-icon-bg">
                    {icon}
                </div>
                <h6 className='mt-2'>{title}</h6>
            </div>
        </div>
    )
}

export default EventCards