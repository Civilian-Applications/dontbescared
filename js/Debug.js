// @flow
import { h, render } from "../web_modules/preact.js";
import { Router, Link } from "../web_modules/preact-router.js";
import { useState, useEffect } from "../web_modules/preact/hooks.js";
import { createStyles, rawStyles } from "../web_modules/simplestyle-js.js";
import screenfull from "../web_modules/screenfull.js";
import htm from "../web_modules/htm.js";
import Nav from "./Nav.js";
import Form from "./Form.js";
import FormInputLat from "./FormInputLat.js";
import FormInputLng from "./FormInputLng.js";
import FormInputElevation from "./FormInputElevation.js";
import FormInputScale from "./FormInputScale.js";
import { setAutoFreeze } from "../web_modules/immer.js";

const html = htm.bind(h);
rawStyles({});
const [styles] = createStyles({
    debugContainer: {
        height: "100%",
        overflow: "auto",
    },
    formContainer: {
        padding: "0 1rem",
        margin: "0 auto",
    },
    heading: {
        color: "white",
    },
});

/*::
type Props = {
};
*/
const Debug = (props /*: Props */) => {
    //

    return html`
        <div class="${styles.debugContainer}">
            <${Nav} />

            <div class="${styles.formContainer}">
                <h2 class="${styles.heading}">Custom coordinates</h2>
                <${Form} />
            </div>
        </div>
    `;
};

export default Debug;
