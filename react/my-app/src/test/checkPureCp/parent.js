import React,{Component,PureComponent} from 'react'
import Child from './child'
export default class Parent extends Component{
  state={
    data:0,
    isFlag:false
  }
  componentDidMount () {

  }

  getNumber=()=>{
    setInterval(()=>{
      this.setState({data:this.state.data+1})
    },2000)
  }

  addFn=()=>{
    this.setState({isFlag:true})
    this.getNumber()
  }
  render () {
    const {data,isFlag} =this.state
    return(
      <div style={{height:'900px'}}>
        <button onClick={this.addFn}>显示</button>
        {
          isFlag&&<Child data={data}></Child>
        }
      </div>
    )
  }
}