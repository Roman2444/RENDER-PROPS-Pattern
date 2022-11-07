class Counter extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
          counter: 0
     }
  }
  onChangeCounterUp = () => {
      this.setState(({counter}) => ({
        counter: counter + 1
      }))
        console.log('couter', this.state.counter )   
  }
  
    onChangeCounterDown = () => {
      this.setState(({counter}) => ({
        counter: counter - 1
      }))
        console.log('couter', this.state.counter )   
  }
 
  render() {
    return (
      <div> 
      <h2> RENDER-PROPS Pattern </h2>
        <button onClick={this.onChangeCounterUp}>
          Click Me +
        </button>
         <button onClick={this.onChangeCounterDown}>
          Click Me -
        </button>
         {this.props.render(this.state.counter)}

        
      </div>
    )
  }
}

const Message = (props) => {
  return (
    <>
      <h3> count clicks: {props.counter}  </h3>
    </>
  )
}

const App = () => {
  return (
    <>
      <Counter 
       render={render => 
      <Message counter={render}/>} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

