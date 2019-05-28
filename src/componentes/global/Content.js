import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import {GridList, Button} from '@material-ui/core';


//Assets
import './css/Content.css';

class Content extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };
  //   constructor() {
  //     super();
  //     this.state = {
  //       count: 0,
  //       number1: 0,
  //       number2: 0,
  //       result: 0
  //     };

  //     this.handleCountClick = this.handleCountClick.bind(this);
  //     this.handleResultClick = this.handleResultClick.bind(this);
  //     this.handeInputChanged = this.handeInputChanged.bind(this);
  //   }

  //   componentDidMount(){
  //     this.setState({
  //       count: 1
  //     });
  //   }

  //     handleCountClick(e){
  //       if (e.target.id === 'add'){
  //         this.setState({
  //           count: this.state.count + 1
  //         });
  //       } else if (e.target.id === 'subtract' && this.state.count > 0){
  //         this.setState({
  //           count: this.state.count -1
  //         });
  //       } else {
  //         this.setState({
  //           count: 0
  //         });
  //       }
  //    }

  //    handleResultClick(e){
  //     this.setState({
  //       result: this.state.number1 + this.state.number2
  //     });
  //    }  

  //    handeInputChanged(e){
  //      if (e.target.id === 'number1'){
  //        this.setState({
  //          number1: Number(e.target.value)
  //        });
  //      }else {
  //        this.setState({
  //          number2: Number(e.target.value)
  //        });
  //      }
  //    }



  render() {
    const { items } = this.props;
    const style ={
      styleButtom: {
        width: 310,
        height: 125
      }
    }

    return (
      <div className="Content">
        <GridList cols={1}>
        {
          items && items.map(
            (item, key) => <Button variant="outlined" size="small" style={style.styleButtom} key={key}><Link to={item.url}>{item.title}</Link></Button>)}
            </GridList>
          
          {/* <h2>Counter: {this.state.count}</h2>
        <p>
          <button id="add" onClick={this.handleCountClick}>+</button>
          <button id="subtract" onClick={this.handleCountClick}>-</button>
          <button id="reset" onClick={this.handleCountClick}>Reset</button>
        </p>

        <h2>Calculator</h2>
        <p>
          <input id="number1" type="number" value={this.state.number1} onChange={this.handeInputChanged} />
          +
          <input id="number2" type="number" value={this.state.number2} onChange={this.handeInputChanged} />

          <button id="result" onClick={this.handleResultClick}>=</button> {this.state.result}
        </p> */}
      </div>
    );
  }
}

export default Content;
