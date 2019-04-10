import React, { Component } from 'react'
import { Paper, IconButton, InputBase} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import {withStyles} from '@material-ui/styles'

const styles = {
  iconButton: {
    padding: 10,
  },
  input: {
    marginTop: 10,
    marginLeft: 5
  },
  paper: {
    marginTop: 10,
    marginBottom: 10
  }
};

class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, handleFunc } = this.props;
    return (
      <div>
        <Paper 
        className={classes.paper} 
        elevation={1}>
          <IconButton 
          className={classes.iconButton}
          aria-label="Menu">
            <SearchIcon />
          </IconButton>
          <InputBase 
          className={classes.input} 
          placeholder="Search Wikipedia" 
          onChange={handleFunc} required/>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(SearchBox)
