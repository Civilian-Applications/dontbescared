// @flow
import { h, render } from "../web_modules/preact.js";
import { Router, Link } from "../web_modules/preact-router.js";
import { createStyles, rawStyles } from "../web_modules/simplestyle-js.js";
import screenfull from "../web_modules/screenfull.js";
import htm from "../web_modules/htm.js";
import StartTheGood from "./StartTheGood.js";
import StartTheBad from "./StartTheBad.js";

const html = htm.bind(h);
rawStyles({});
const [styles] = createStyles({
    startContainer: {
        height: "100%",
        backgroundImage: "url(/img/dbs_background.2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    contentContainer: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "1rem",
        margin: "0 1rem",
    },
});

/*::
type Props = {
};
*/
const Start = (props /*: Props */) => {
    //

    return html`
        <div class="${styles.startContainer}">
            <div class="${styles.contentContainer}">
                ${(() => {
                    // $FlowFixMe
                    if (Modernizr.getusermedia) {
                        return html`<${StartTheGood} />`;
                    } else {
                        return html`<${StartTheBad} />`;
                    }
                })()}
            </div>
        </div>
    `;
};

export default Start;
