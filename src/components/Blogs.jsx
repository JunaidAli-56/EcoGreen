import React from 'react'
import BlogsCard from './BlogsCard'
import ParagraphHeading from './ParagraphHeading'

const Blogs = () => {
    return (
        <div className="container-fluid p-0 bg-light py-5">
            <div className="container blog-container">
                <div className="row">
                    <ParagraphHeading
                        subTitle='OUR BLOG'
                        title='Recent From Blog'
                    />
                    <BlogsCard
                        index={1}
                        image='/assets/image-1.webp'
                        title='Deforestation is the Threat to our Ecological System'
                        description='A small river named Duden flows by their place.'
                    />
                    <BlogsCard
                        index={2}
                        image='/assets/gallery-4.webp'
                        title='Deforestation is the Threat to our Ecological System'
                        description='A small river named Duden flows by their place.'
                    />
                    <BlogsCard
                        index={3}
                        image='/assets/image-3.webp'
                        title='Deforestation is the Threat to our Ecological System'
                        description='A small river named Duden flows by their place.'
                    />
                    <BlogsCard
                        index={4}
                        image='/assets/image-4.webp'
                        title='Deforestation is the Threat to our Ecological System'
                        description='A small river named Duden flows by their place.'
                    />
                </div>
            </div>
        </div>
    )
}

export default Blogs