import React from 'react';

const Work = props => {
	return (
	<div className="section-3">
		<div className="title">{props.title}</div>
		<div className="work-content">
			<div className="project-container">
				<div className="project bar">
			<a href="http://jjs.life/happy-hour-2" target="_blank">
				<div className="project-name">Happy Hour</div>
				<div className="project-summary">
					Happy Hour deals at bars around Melbourne.
				</div>
			</a>
			</div>
			</div>
			<div className="project-container">
			<div className="project beach">
				<a href="http://beachfrontelectrical.com.au" target="_blank">
					<div className="project-name">Beachfront Electrical</div>
					<div className="project-summary">
						Website for an Electrical business based on the Sunshine Coast.
					</div>
				</a>
				</div>
			</div>
			<div className="project-container">
				<div className="project callan shadow">
					<a href="http://callankrause.com" target="_blank">

				<div className="project-name">Callan Krause</div>
				<div className="project-summary">
					Sunshine Coast MMA Fighter porfolio.
				</div>
					</a>
					
			</div>
			</div>
			<div className="project-container">
				<div className="project resume">
				<a href="http://jjs.life/react-resume" target="_blank">

				<div className="project-name">React Resume</div>
				<div className="project-summary">
					Resume generator built in React reading from Resume.json.
				</div>
			</a>
			</div>
			</div>
		</div>
	</div>
		)
}

export default Work;