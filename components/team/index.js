import React, { Component } from 'react'
import Link from 'next/link'

class Team extends Component {
  render() {
    return (
      <div className="team-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-title text-center section-title-padding">
                <h2>Our Experts</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                  quibusdam fugit quaerat exercitationem dicta expedita, saepe
                  harum incidunt rerum fuga itaque sint iste eius facilis
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="team-card">
                <div className="member-img">
                  <img src="/images/teams/team-1.jpg" alt="member" />
                  <div className="member-social">
                    <ul>
                      <li>
                        <Link href="/">facebook </Link>
                      </li>
                      <li>
                        <Link href="/">twitter</Link>
                      </li>
                      <li>
                        <Link href="/">linkedin</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="member-description">
                  <h4 className="name">Madrid Munson</h4>
                  <h6 className="designation">Model</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-card">
                <div className="member-img">
                  <img src="/images/teams/team-2.jpg" alt="member" />
                  <div className="member-social">
                    <ul>
                      <li>
                        <Link href="/">facebook </Link>
                      </li>
                      <li>
                        <Link href="/">twitter</Link>
                      </li>
                      <li>
                        <Link href="/">linkedin</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="member-description">
                  <h4 className="name">Williamson Munro</h4>
                  <h6 className="designation">Actor</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-card">
                <div className="member-img">
                  <img src="/images/teams/team-3.jpg" alt="member" />
                  <div className="member-social">
                    <ul>
                      <li>
                        <Link href="/">facebook </Link>
                      </li>
                      <li>
                        <Link href="/">twitter</Link>
                      </li>
                      <li>
                        <Link href="/">linkedin</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="member-description">
                  <h4 className="name">Jannathan Doe</h4>
                  <h6 className="designation">Manager</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Team
