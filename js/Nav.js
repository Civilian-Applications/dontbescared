// @flow
import { h, render } from "../web_modules/preact.js";
import { Link } from "../web_modules/preact-router.js";
import { createStyles, rawStyles } from "../web_modules/simplestyle-js.js";
import { useContext } from "../web_modules/preact/hooks.js";
import { AppContext } from "./AppContext.js";
import htm from "../web_modules/htm.js";
import screenfull from "../web_modules/screenfull.js";

const html = htm.bind(h);
const [styles] = createStyles({
    activeNavItem: {
        backgroundColor: "orange",
    },
});

/*::
type Props = {
};
*/
const Nav = (props /*: Props */) => {
    // State
    const [state, dispatch] = useContext(AppContext); // - Doesn't work with Flow

    return html`
		<nav data-cy="nav">
			<ul>
				<li>
					<${Link}
						activeClassName="${styles.activeNavItem}"
						href="/">
							v0.39
					</${Link}>
				</li>
				<li>
					<${Link}
						data-cy="parliament"
						activeClassName="${styles.activeNavItem}"
						onClick="${() => {
                            screenfull.request().then(() /*: void */ => {
                                // setTimeout(() /*: void */ => {}, 500);
                                const localState = {
                                    fov: 76,
                                    lat: -35.306203,
                                    lng: 149.1250937,
                                    elevation: 1700,
                                    scale: 1000,
                                };
                                dispatch({
                                    type: "UPDATE_ALL",
                                    payload: localState,
                                });
                            });
                        }}"
                    href="/coal/?fov=${76}&lat=${-35.306203}&lng=${149.1250937}&elevation=${1700}&scale=${1000}"
							Parliament
					</${Link}>
				</li>
				<li>
					<${Link}
						data-cy="bay"
						activeClassName="${styles.activeNavItem}"
						onClick="${() => {
                            screenfull.request().then(() /*: void */ => {
                                // setTimeout(() /*: void */ => {}, 500);
                                const localState = {
                                    fov: 76,
                                    lat: -33.52133,
                                    lng: 151.346974,
                                    elevation: 600,
                                    scale: 500,
                                };
                                dispatch({
                                    type: "UPDATE_ALL",
                                    payload: localState,
                                });
                            });
                        }}"
						href="/coal/?fov=${76}&lat=${-33.521331}&lng=${151.346974}&elevation=${600}&scale=${500}">
							The bay
					</${Link}>
				</li>
			</ul>
		</nav>
    `;
};

export default Nav;
