import React,{Component,PureComponent} from 'react'
const mobileModalPreventScroll = status => {
  let preventEvent = e => {
    e.preventDefault()
  }
  if (status === 'open') {
    document.addEventListener('touchmove', preventEvent, { passive: false })
  }
  if (status === 'close') {
    document.removeEventListener('touchmove', preventEvent, { passive: false })
  }
}
export default class Child extends Component{
  componentDidMount(){
    console.log('didMount')
    mobileModalPreventScroll('open')
  }
  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('didUpdate')
  }
  componentWillUnmount () {
    mobileModalPreventScroll('close')
  }

  render () {
    const {data} =this.props
    return(
      <div>
        接收参数---
        {
          data
        }
      </div>
    )
  }
}