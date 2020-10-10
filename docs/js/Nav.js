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

    const localState = {
        fov: 76,
        lat: -35.310198,
        lng: 149.1271447,
        elevation: 2500,
        scale: 1750,
    };

    return html`
		<nav data-cy="nav">
			<ul>
				<li>
					<${Link}
						activeClassName="${styles.activeNavItem}"
						href="/">
							v0.53
					</${Link}>
				</li>
				<li>
					<${Link}
						data-cy="parliament"
						activeClassName="${styles.activeNavItem}"
						onClick="${() => {
                            screenfull.request().then(() /*: void */ => {
                                // setTimeout(() /*: void */ => {}, 500);
                                dispatch({
                                    type: "UPDATE_ALL",
                                    payload: localState,
                                });
                            });
                        }}"
                    href="/coal/?fov=${localState.fov}&lat=${
        localState.lat
    }&lng=${localState.lng}&elevation=${localState.elevation}&scale=${
        localState.scale
    }">
							Parliament
					</${Link}>
				</li>
			</ul>
		</nav>
    `;
};

export default Nav;
