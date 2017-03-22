import React, {Component} from 'react';

class Contact extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sender: "",
			changed: false,
			email: "",
			message: "Only one thing lacks these banks of green \n The Pussy Cat who is their Queen...."
		}
		this.updateMessage= this.updateMessage.bind(this);
		this.updateSender = this.updateSender.bind(this);
		this.updateEmail = this.updateEmail.bind(this);
	}




	updateSender(e){
		this.setState({ sender: e.target.value, changed: true })
	}

	updateMessage(e){
		this.setState({ message: e.target.value, changed: true })
	}

	updateEmail(e){
		this.setState({ email: e.target.value, changed: true })
	}

	render() {

		return (
			<span>
				<div className="title">
					Contact
				</div>
			<div className="contact">
			<div className="col two">
	
				<div className="message paragraph">
					{this.state.changed ? "Dear John Williamson," : "Dearly beloved,"} <br /><br />
						{this.state.message.split('\n').map(function(item, key) {
						  return (
						    <span key={key}>
						      {item}
						      <br/>
						    </span>
						  )
						})}
	
	
					<br />
					Regards, <br />
					{this.state.changed ?  this.state.sender : "Pug"} <br />
					{this.state.email}
				</div>
			</div>
	
			<div className="col form two">
			<form action="https://formspree.io/johnjwilliamson@live.com" method="POST" className="form">
				<div className="label form">Message: </div>
				<textarea className="text" name="message" onChange={this.updateMessage} ></textarea> <br /><br />
				<div className="label form">Name: </div>
				<input type="text" name="name" className="form text" onChange={this.updateSender} placeholder="" /> <br /><br />
				<div className="label form">Email: </div>
				<input className="form text" name="_replyto" onChange={this.updateEmail} type="text" /> 
				<div><button type="submit" value="Send">Send</button></div>

	
			</form>
			</div>
		</div>
		</span>
			)}
}

export default Contact;