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
    startContainer: {
        height: "100%",
        overflow: "auto",
    },
    formContainer: {
        width: "80%",
        margin: "0 auto",
    },
});

/*::
type Props = {
};
*/
const Start = (props /*: Props */) => {
    //
    useEffect(() => {
        // Events
        const mainContainer = document.getElementById("goodthing") || null;
        if (mainContainer !== null) {
            // Modernizr doesn't have an es module npm package so it's
            // imported with a <script> tag in `index.html`
            // $FlowFixMe
            if (Modernizr.hasEvent("touchend")) {
                mainContainer.addEventListener(
                    "touchend",
                    () => {
                        // Doesn't work on iPhone ~ https://caniuse.com/#feat=fullscreen
                        // Plus we only want fullscreen on touch devices
                        screenfull.request().then(() /*: void */ => {
                            setTimeout(() /*: void */ => {}, 500);
                        });
                    },
                    { once: true },
                );
            }
        }
    });

    return html`
        <div class="${styles.startContainer}">
            <${Nav} />

            <div class="${styles.formContainer}">
                <h2>Custom coordinates</h2>

                <${Form} />
            </div>
        </div>
    `;
};

export default Start;
