import React from 'react';

const Intro = props => {

	console.log(props.basics);
	const { name, summary, label, picture } = props.basics;

	return (
		<div className="section-1">
			<div className="portfolio-photo col">
			<img src={picture} width="450" height="600" />
		</div>
		<div className="portfolio-summary col">
			<div>
			<div className="name">
				{props.basics.name}.
			</div>
			<div className="summary">
				{label}
			</div>
	        <div className="social-icons">
	          <a href="http://jjs.life" target="_blank"><i className="fa social-icon fa-globe fa-2x" aria-hidden="true"></i></a>
	          <a href="http://facebook.com/John.J.95" target="_blank"><i className="fa social-icon fa-facebook-official fa-2x" aria-hidden="true"></i></a>
	          <a href="https://github.com/velua" target="_blank"><i className="fa social-icon fa-github fa-2x" aria-hidden="true"></i></a>
	          <a href="https://www.linkedin.com/in/jjwilliamson" target="_blank"><i className="fa social-icon fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
	          <a href="https://twitter.com/velua" target="_blank"><i className="fa social-icon fa-twitter fa-2x" aria-hidden="true"></i></a>
	          <a href="https://medium.com/@jjs.life/" target="_blank"><i className="fa social-icon fa-medium fa-2x" aria-hidden="true"></i></a>
	        </div>
		</div>
		</div>

		</div>
		)
}

export default Intro;