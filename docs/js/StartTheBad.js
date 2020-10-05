// @flow
import { h, render } from "../web_modules/preact.js";
import { Router, Link } from "../web_modules/preact-router.js";
import { createStyles, rawStyles } from "../web_modules/simplestyle-js.js";
import screenfull from "../web_modules/screenfull.js";
import htm from "../web_modules/htm.js";

const html = htm.bind(h);
rawStyles({});
const [styles] = createStyles({
    startChild: {
        margin: "0 auto",
    },
    startChildCopy: {
        color: "white",
        marginBottom: "1rem",
        textAlign: "center",
    },
});

/*::
type Props = {
};
*/
const StartTheBad = (props /*: Props */) => {
    //

    return html`
        <div
            data-cy="copy"
            class="${styles.startChild} ${styles.startChildCopy}"
        >
            <p>
                Don't be scared!
            </p>
            <p>
                We're very sorry but your browser isn't yet ready for our
                awesome technology. If you'd like to watch a quick video of the
                piece filmed on location, please click through to YouTube below.
            </p>
            <div class="${styles.startChild}">
                <a
                    data-cy="start"
                    class="blue waves-effect waves-light btn-small"
                    href="https://youtu.be/VlCRzogXy9s"
                    >Watch <i class="material-icons right">ondemand_video</i></a
                >
            </div>
        </div>
    `;
};
export default StartTheBad;
