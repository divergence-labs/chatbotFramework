import React, { Component } from 'react';
import { Widget, addResponseMessage} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

class App extends Component {
        constructor(props) {
		    super(props);
		    this.state = {user: []};
	    }
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }
 
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    fetch('https://chatbot-platform.azurewebsites.net/speech', {
			method: 'POST',
			body: JSON.stringify({
          speech : newMessage
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
        if(response.ok){
        return response.json()
        }
        else{
          throw new Error("Something is wrong");
        }
			}).then(json => {
        console.log(json.botResponse);
        if(json.botResponse){
        addResponseMessage(json.botResponse);
				this.setState({
          user:json
        });
        }
        else{
            addResponseMessage("Please check the config file");
        }
      })
      .catch((error)=>{
        console.log("Error", error)
        addResponseMessage(error);
      });
      // Now send the message throught the backend API
  }
  render() {
    return (
    
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={'https://chatbot-platform.azurewebsites.net/images/bot.png'}
          title="First Connect"
          subtitle="Oh My BOT !!!"
        />
      </div>
    );
  } 
}
 
export default App;