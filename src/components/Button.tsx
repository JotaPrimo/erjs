import { Component } from "react";

interface ButtonProps {
  onClick?: () => any
  initializeClicked?: boolean
}

interface ButtonState {
  alreadyClicked: boolean
}

class Button extends Component<ButtonProps, ButtonState> {
  constructor (props: ButtonProps) {
    console.log('constructor')
    super(props)

    this.state = {
      alreadyClicked: !!props.initializeClicked
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        alreadyClicked: false
      })
      console.log('rodou o timeout')
    }, 5000)
  }

  render () {
    console.log('render')
    return <button
      onClick={() => {
        this.setState({
          alreadyClicked: true
        })
        this.props.onClick?.call([])
      }}
      disabled={this.state.alreadyClicked}
    >
      
    </button>
  }
}

export default Button