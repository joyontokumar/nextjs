import React, { Component } from 'react';
import Card from './card';
import { servicedata} from '../../data';


class Services extends Component {
  render() {
    return (
        <div className="service-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-title text-center section-title-padding">
                            <h2>We Are Providing Best Quality Services About Five Years With Great Satisfaction.</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Card services={servicedata}/>
                </div>
            </div>
        </div>
    )
  }
}
export default  Services