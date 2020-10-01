// @flow
import { h, render } from "../web_modules/preact.js";
import { Router, Link } from "../web_modules/preact-router.js";
import { createStyles, rawStyles } from "../web_modules/simplestyle-js.js";
import screenfull from "../web_modules/screenfull.js";
import htm from "../web_modules/htm.js";

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
    startChild: {
        margin: "0 auto",
    },
    startChildCopy: {
        color: "white",
        fontSize: "1rem",
        marginBottom: "1rem",
        textAlign: "center",
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
                <div
                    data-cy="copy"
                    class="${styles.startChild} ${styles.startChildCopy}"
                >
                    <p>
                        Don't be scared!
                    </p>
                    <p>
                        Please point your phone at Parliament House and press
                        "Start" below to see the augmented-reality artwork.
                    </p>
                </div>
                <div class="${styles.startChild}">
                    <a
                        data-cy="start"
                        class="blue waves-effect waves-light btn-small"
                        onClick="${() /*: void */ => {
                            screenfull.request().then(() /*: void */ => {
                                // setTimeout(() /*: void */ => {}, 500);
                            });
                        }}"
                        href="/coal/?lat=-35.306203&lng=149.1250937&elevation=1400&scale=1000"
                        >Start <i class="material-icons right">login</i></a
                    >
                </div>
            </div>
        </div>
    `;
};

export default Start;
