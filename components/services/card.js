import React from 'react'

function Card({ services}) {
  return (
      <>
          {services.map((single) => {
              return (
                    <div className="col-lg-4">
                        <div className="single-card single-service">
                            <h5>{single.icon}</h5>
                            <h3 className="service-title">{single.title}</h3>
                            <p>{single.description}</p>
                        </div>
                    </div>
              )
          })}
      </>


  )
}
export default Card