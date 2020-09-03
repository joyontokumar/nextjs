import React from 'react'
import Link from 'next/link'
const Blog = ({ posts }) => {
  return (
    <section className="latest-blog section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="section-title text-center section-title-padding">
              <h2>Our Latest Posts</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                quibusdam fugit quaerat exercitationem dicta expedita, saepe
                harum incidunt rerum fuga itaque sint iste eius facilis
              </p>
            </div>
          </div>
          <div className="row "></div>
        </div>
      </div>
    </section>
  )
}

export default Blog
