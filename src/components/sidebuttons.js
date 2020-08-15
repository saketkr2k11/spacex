import React from 'react';
import { Button } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import './sidebuttons.css';

const years = [
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
];

class Sidebuttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yearFilter: '',
      launchFilter: '',
      landFilter: '',
    };
  }
  handleyearfilter = (e) => {
    this.setState(
      {
        yearFilter: e.target.value,
      },
      () => {
        //console.log(this.state);
        this.props.handler(this.state);
      }
    );
  };
  handleLandfilter = (e) => {
    this.setState(
      {
        landFilter: e.target.value,
      },
      () => {
        // console.log(this.state);
        this.props.handler(this.state);
      }
    );
  };
  handleLaunchfilter = (e) => {
    this.setState(
      {
        launchFilter: e.target.value,
      },
      () => {
        //console.log(this.state);
        this.props.handler(this.state);
      }
    );
  };
  render() {
    return (
      <div className='sidebuttons '>
        <h5>Filters</h5>
        <div>
          <Row>
            <Col className='col-12'>
              <h6 className='h6'>Launch Year</h6>
            </Col>
            {years.map((i) => (
              <Col className='col-6 btn1' key={i}>
                <Button
                  color='success'
                  key={i}
                  value={i}
                  onClick={this.handleyearfilter}
                >
                  {i}
                </Button>
              </Col>
            ))}
            <Col className='col-6'>{''}</Col>
          </Row>
          <Row>
            <Col className='col-12'>
              <h6 className='h6'>Successful Launch </h6>
            </Col>
            <Col className='col-6 btn1'>
              <Button
                color='success'
                value='true'
                onClick={this.handleLaunchfilter}
              >
                True
              </Button>
            </Col>
            <Col className='col-6 btn1'>
              <Button
                color='success'
                value='false'
                onClick={this.handleLaunchfilter}
              >
                False
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className='col-12 '>
              <h6 className='h6'>Successful Landing </h6>
            </Col>
            <Col className='col-6 btn1'>
              <Button
                color='success'
                value='true'
                onClick={this.handleLandfilter}
              >
                True
              </Button>
            </Col>
            <Col className='col-6 btn1'>
              <Button
                color='success'
                value='false'
                onClick={this.handleLandfilter}
              >
                False
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Sidebuttons;
