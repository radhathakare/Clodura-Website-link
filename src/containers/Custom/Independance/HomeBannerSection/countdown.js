import React from 'react';
import './countdown.css';


class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
  
    componentDidMount() {
      this.getTimeDifference(this.props.eventDate);
      setInterval(() => this.getTimeDifference(this.props.eventDate), 1000);
    }
  
    leadingZero(num) {
      return (num < 10 && num > 0) ? "0" + num : num;
    }
  
    getTimeDifference(eventDate) {
      const time = Date.parse(eventDate) - Date.parse(new Date());
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const seconds = Math.floor((time / 1000) % 60);
      this.setState({ days, hours, minutes, seconds });
    }
  
    render() {
      return (
      
        <div>
          <div className="App-title"><h2>Avail offer Till India Independence Day 2022 Only </h2> </div>
          <div className="clock">
            {this.leadingZero(this.state.days)} :
          </div>
          <div className="clock">
            {this.leadingZero(this.state.hours)} :
          </div>
          <div className="clock">
            {this.leadingZero(this.state.minutes)} : 
          </div>
          <div className="clock">
            {this.leadingZero(this.state.seconds)} 
          </div>
        </div>
       
      );
    }
  }
  
  class Countdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        events:[
          { name:'Avail offer Till India Independence Day 2022 Only', date:'August 15, 2022' },
        
        ],
        newDate: "",
        newName: "",
      };
    }
    
    addNewEvent = () => {
      let evt = {name: this.state.newName, date: this.state.newDate};
      let newEvents = this.state.events.concat(evt);
      this.setState({
        newDate: "",
        newName: "",
        events: newEvents,
      });
    }
    
    render() {
      let events = this.state.events.map((evt) =>
        <Timer key={evt.date} eventName={evt.name} eventDate={evt.date} />
      );
      return (
        
        <div className="App">
          {events}
        </div>                        
      )
    }
  }
  export default Countdown;
  