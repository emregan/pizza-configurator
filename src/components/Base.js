import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { addBase } from '../actions/index'
import './Components.css'

const baseTypes = ["25cm NY Style", "30cm NY Style", "35cm NY Style", "20cm NY Style"]

class Base extends PureComponent {

  handleChange = (event) => {
    this.props.addBase(event.target.value)
  }

  render() {
    return (<div>
      <div className="form-group optionSpacing">
        <label>Pick your base:
          <select name='base' onChange={this.handleChange} className="form-select">
            <option value="">Select a base..</option>
            {
              baseTypes.map(baseType => {
                return (<option key={baseType} value={baseType}>{baseType}</option>);
              })
            }
          </select>
        </label>
      </div>
    </div>);
  }
}


const mapStateToProps = (state) => {
  return {
    pizza: state.pizza
  }
}

export default connect(mapStateToProps, { addBase })(Base)
