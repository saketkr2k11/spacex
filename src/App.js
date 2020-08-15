import React from 'react';
import axios from 'axios';
import Sidebuttons from './components/sidebuttons';
import Itemlist from './components/itemlist';

import './App.css';
import { Row, Col } from 'reactstrap';

class App extends React.Component {
  /*const [data, setData] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          'https://api.spaceXdata.com/v3/launches?limit=100'
        );
        console.log(response.data[13]);
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    }
    getUser();
  }, []);
*/
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      yy: '',
      launch: '',
      land: '',
    };
    this.updateList = this.updateList.bind(this);
  }
  async updateList() {
    let url = 'https://api.spaceXdata.com/v3/launches?limit=100&';
    let durl = '';
    const { yy, launch, land } = this.state;
    if (yy !== '' && land === '' && launch === '') {
      durl = 'launch_year=' + parseInt(yy);
    } else if (yy === '' && land !== '' && launch === '') {
      durl = 'land_success=' + land;
    } else if (yy === '' && land === '' && launch !== '') {
      durl = 'launch_success=' + launch;
    } else if (yy !== '' && land === '' && launch !== '') {
      durl = 'launch_success=' + launch + '&launch_year=' + parseInt(yy);
    } else if (yy !== '' && land !== '' && launch === '') {
      durl = 'land_success=' + land + '&launch_year=' + parseInt(yy);
    } else if (yy === '' && land !== '' && launch !== '') {
      durl = 'land_success=' + land + '&launch_success=' + launch;
    } else if (yy !== '' && land !== '' && launch !== '') {
      durl =
        'land_success=' +
        land +
        '&launch_success=' +
        launch +
        '&launch_year=' +
        parseInt(yy);
    }
    url = url + durl;
    let response = await axios.get(url);
    this.setState({ data: response.data, loading: false });
  }

  handler = (val) => {
    this.setState(
      {
        yy: val.yearFilter,
        launch: val.launchFilter,
        land: val.landFilter,
      },
      () => {
        this.setState({ loading: true }, () => this.updateList());
      }
    );
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await axios.get(
        'https://api.spaceXdata.com/v3/launches?limit=100'
      );

      this.setState({ data: response.data, loading: false });
    } catch (error) {
      alert(error.message);
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>SpaceX Launch Programs</h1>

        <div className='maindiv'>
          <Row>
            <Col className='col-12 col-md-4 col-lg-3'>
              <Sidebuttons handler={this.handler} />
            </Col>
            <Col className='col-12 col-md-8 col-lg-9'>
              {this.state.loading ? (
                <div
                  className='spinner-border'
                  style={{
                    margin: '10% 40%',
                  }}
                ></div>
              ) : (
                <Itemlist data={this.state.data} />
              )}
            </Col>
          </Row>
        </div>
        <div className='footer'>
          <h6>Developed by Saket Kumar</h6>
        </div>
      </div>
    );
  }
}

export default App;
