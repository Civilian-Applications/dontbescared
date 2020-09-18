// @flow
import { h, render } from "../web_modules/preact.js";
import { Link } from "../web_modules/preact-router.js";
import { createStyles, rawStyles } from "../web_modules/simplestyle-js.js";
import htm from "../web_modules/htm.js";

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
    return html`
		<nav data-cy="nav">
			<ul>
				<li>
					<${Link}
						activeClassName="${styles.activeNavItem}"
						href="/">
							Home
					</${Link}>
				</li>
				<li>
					<${Link}
						data-cy="parliament"
						activeClassName="${styles.activeNavItem}"
						href="/coal/?lat=-39.45&lng=149.2345&elevation=745&scale=500">
							Parliament
					</${Link}>
				</li>
				<li>
					<${Link}
						data-cy="bay"
						activeClassName="${styles.activeNavItem}"
						href="/coal/?lat=-33.521331&lng=151.346974&elevation=750&scale=200">
							The bay
					</${Link}>
				</li>
			</ul>
		</nav>
    `;
};

export default Nav;
