import React, { Component, PropTypes} from "react"
// import { bindActionCreators } from 'redux';
import actions from '../actions/';

export default class App extends Component{
  constructor(){
    super()
    this.state = {count: 0}
  }
  countUp(){
    this.setState({
      count : ++this.state.count
    })
  }
  countDown(){
    this.setState({
      count : --this.state.count
    })
  }
  render(){
    let actions = {
      countUp: this.countUp.bind(this),
      countDown: this.countDown.bind(this)
    }
    let props = Object.assign( {actions}, this.state)
    return <Counter {...props} />
  }
}
class Counter extends Component{
  render(){
    const { actions, count } = this.props
    return (
      <div>
        <h1>{count}</h1>
        <UpButton actions={actions} />
        <DonwButton actions={actions} />
      </div>
    )
  }
}

class UpButton extends Component{ 
  onClick(){
    return this.props.actions.countUp()
  }
  render(){
    return <button onClick={this.onClick.bind(this)}> + </button>
  }
}

class DonwButton extends Component{ 
  onClick(){
    return this.props.actions.countDown()
  }
  render(){
    return <button onClick={this.onClick.bind(this)}> - </button>
  }
}