import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import textInput from '../textInput/textInput'
const styles = theme => ({

  });
class AddTable extends React.Component {
    constructor() {
      super();
      this.state = {
        name: "",
        items: [{ name: "" }]
      };
    }
  
    itemNameChange = idx => evt => {
      const newitems = this.state.items.map((item, sidx) => {
        if (idx !== sidx) return item;
        return { ...item, name: evt.target.value };
      });
  
      this.setState({ items: newitems });
    };
  
    handleSubmit = evt => {
      const { name, items } = this.state;
      alert(`Deleted: ${name} with ${items.length} items`);
    };
  
    handleAdditem = () => {
      this.setState({
        items: this.state.items.concat([{ name: "" }])
      });
    };
  
    handleRemoveitem = idx => () => {
      this.setState({
        items: this.state.items.filter((s, sidx) => idx !== sidx)
      });
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          {/* ... */}
          {this.state.items.map((item, idx) => (
            <div className="item">
              <input
                type="text"
                value={item.name}
                onChange={this.itemNameChange(idx)}
              />
              <button
                type="button"
                onClick={this.handleRemoveitem(idx)}
                className="small"
              >
                -
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={this.handleAdditem}
            className="small"
          >
            Add item
          </button>
          <button>Reset</button>
        </form>
      );
    }
  }
  AddTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(AddTable);