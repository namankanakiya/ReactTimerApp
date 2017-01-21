var React = require('react');
var Navigation = require('Navigation');

var Main = ({children}) => {
	return (
		<div>
			<Navigation/>
			<div className="row">
				<div className="column small-centered medium-6 large-4">
					{children}
				</div>
			</div>
		</div>
	);
}

module.exports = Main;