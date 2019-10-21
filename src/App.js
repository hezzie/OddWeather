import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Form from './components/Form'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      city : 'Kigali',
      data: '',
      error: '',
    }
  }

  handleChange = (event) => {
    const { value } = event.target
    this.setState({city: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.findCity();
  }

   findCity = async() => {
      try {
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&APPID=7f6a0fe6f25df85a9176f605964e2fb0`
        const  result  = await axios.get(url);
        this.setState({ data:result.data, error: '' })
      } catch (error) {
        const { response } = error
        const { message } = response === undefined ? '' : response.data
        this.setState({data: '', error: message})
      }
  }

  componentDidMount(){
  this.findCity();
  }
  
  render(){
    
    return(
      <div>
        <Form  
          updateCity = {this.updateCity}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

export default App;
