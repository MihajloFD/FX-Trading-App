import React, { Component } from 'react';
import './assets/App.css';
class Panel extends Component {
  constructor (props) {
    super(props);
    const {buy, sell, pair} = props.panel;
    const currency = pair.split(' ');
    this.state = {buy, sell, currency, pair};
  }
  componentDidMount() {
    this.interval = setInterval(() => this.start(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  start () {
    const {buy, sell, currency} = this.state; 
    let randomBoolean = Math.random() >= 0.5;
    let randomPercentage = Math.random();
    let decimalPlaces = currency[1] === 'JPY' ? 3 : 5; 
    if (randomBoolean) {
      let a = (buy * 1-randomPercentage*0.1).toFixed(decimalPlaces);
      let b = (sell * 1-randomPercentage*0.1).toFixed(decimalPlaces);
      this.setState({buy: a, sell: b, triangleStyle: 'triangle red'});      
    } else {
      let c = (buy * 1+randomPercentage*0.1).toFixed(decimalPlaces);
      let d = (sell * 1+randomPercentage*0.1).toFixed(decimalPlaces);
      this.setState({buy: c, sell: d, triangleStyle: 'triangle green'});
    }
  }
  formatPrice (price) {
    var pieces = price.toString().split('');
    const last = pieces.slice(-1);
    const clean1 = pieces.splice(-1,1);
    const two = pieces.slice(-2);
    const clean2 = pieces.splice(-2,2);
    console.log(clean1, clean2);
    return (
      <div className='price'>
        <span className='first'>{pieces}</span>
        <span className='second'>{two}</span>
        <sup className='third'>{last}</sup>
      </div>
    )
    
  } 
  render() {
    const {buy, sell, triangleStyle, currency, pair} = this.state;
    return (
      <div className="col-lg-3 panel-wrapper">
        <div className='panel'>
          <h4 className='panel-title'>{pair}</h4>
          <div className='panel-content'>
            <div className='sell'>
              <div className='outer'>
                <div className='inner'/>
              </div>
              <div className='content-wrapper'>
                <div className='content'>
                  <div className='currency'>Sell {currency[0]}</div>
                  {sell ? this.formatPrice(sell) : 'there is no price'}
                </div>
              </div>
          </div>
            <div className={triangleStyle} />
            <div className='buy'>
              <div className='outer'>
                <div className='inner'/>
              </div>
              <div className='content-wrapper'>
                <div className='content'>
                  <div className='currency'>Buy {currency[1]}</div>
                  {buy ? this.formatPrice(buy) : 'there is no price'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;