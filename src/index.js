import React from 'react';
import { render } from 'react-dom';
import "./main.css";
import Front from './Page/Front';
import Info from './Page/Info';
import registerServiceWorker from './registerServiceWorker';

render(
	<React.Fragment>
		<Front />
		<Info />
	</React.Fragment>,
	document.getElementById('root')
);
registerServiceWorker();
