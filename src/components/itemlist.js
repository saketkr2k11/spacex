import React from 'react';
import './itemlist.css';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
} from 'reactstrap';

function itemlist(props) {
  return (
    <div className='listItem'>
      <Row>
        {props.data.map((x) => (
          <Col
            className='col-12 col-md-6 col-lg-3'
            key={x.flight_number}
            style={{ marginBottom: '10px' }}
          >
            <Card>
              <CardImg
                top
                src={x.links.mission_patch_small}
                alt='Card image cap'
              />
              <CardBody>
                <CardTitle className='listTitle'>
                  {x.mission_name + ' #' + x.flight_number}
                </CardTitle>
                <CardText tag='div'>
                  <p>
                    <span className='listKey'>Launch Year:</span>
                    <span className='listValue'>{x.launch_year}</span>
                  </p>
                  <p>
                    <span className='listKey'>Successful Launch:</span>
                    {x.launch_success && x.launch_success === true ? (
                      <span className='listValue'>true</span>
                    ) : (
                      <span className='listValue'>false</span>
                    )}
                  </p>
                  <p>
                    <span className='listKey'>Successful Landing:</span>
                    {x.rocket.first_stage.cores[0].land_success &&
                    x.rocket.first_stage.cores[0].land_success === true ? (
                      <span className='listValue'>true</span>
                    ) : (
                      <span className='listValue'>false</span>
                    )}
                  </p>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

itemlist.propTypes = {
  data: PropTypes.array,
};

export default itemlist;
