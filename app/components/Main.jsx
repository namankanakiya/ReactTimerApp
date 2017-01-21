var React = require('react');
var Navigation = require('Navigation');

var Main = ({children}) => {
	return (
		<div>
			<div>
				<Navigation/>
				<div>
					<p>Main.jsx Rendered</p>
					{children}
				</div>
			</div>
		</div>
	);
}

module.exports = Main;