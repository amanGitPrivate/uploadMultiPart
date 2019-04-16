import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const endpoint = 'http://infomapdev.sapient.com:5000/upload';
//const endpoint = 'http://localhost:5000/upload'

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
      loaded: 0
    };
  }
  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  };
  handleUpload = () => {
    const data = new FormData();
    data.append('file', this.state.selectedFile, this.state.selectedFile.name);
    debugger;
    axios
      .post(endpoint, data)
      .then(res => {
        console.log('File uploaded successfully.');
      })
      .catch(err => {
        console.log(
          'There must be some error, please check : ' +
            err.response.data.message
        );
      });
  };
  render() {
    return (
      <div className="App" style={{ paddingTop: '50px' }}>
        <input
          type="file"
          name="fileName"
          id=""
          onChange={this.handleselectedFile}
          multiple
        />
        <button onClick={this.handleUpload}>Upload</button>
      </div>
    );
  }
}

export default App;
