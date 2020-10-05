// @flow
import { h } from "../web_modules/preact.js";
import htm from "../web_modules/htm.js";
import Router from "../web_modules/preact-router.js";
import { AppProvider } from "./AppContext.js";
import Home from "./Home.js";
import Appointment from "./Appointment.js";
import Start from "./Start.js";
import Debug from "./Debug.js";
import Coal from "./Coal.js";
const html = htm.bind(h);

/*::
type Props = {
	url: string
};
*/
const App /*: function */ = (props /*: Props */) => {
    return html`
    	<${AppProvider} >
    		<${Router}  url=${props.url}>
				<${Home} path="/" />
				<${Start} path="/start" />
				<${Appointment} path="/appointment" />
				<${Debug} path="/debug/" />
				<${Coal} path="/coal/:params?" />
    		</${Router}>
    	</${AppProvider} >
  `;
};

export default App;
