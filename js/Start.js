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
    },
    contentContainer: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "3rem",
        margin: "3rem",
    },
    startChild: {
        margin: "0 auto",
    },
});

/*::
type Props = {
};
*/
const Start = (props /*: Props */) => {
    //
    useEffect(() => {});

    return html`
        <div class="${styles.startContainer}">
            <div class="${styles.contentContainer}">
                <div class="${styles.startChild}">
                    <p>
                        Welcome! Please point your phone at Parliament House and
                        press "Start" below to see the augmented-reality
                        artwork.
                    </p>
                </div>
                <div class="${styles.startChild}">
                    <a
                        class="blue waves-effect waves-light btn-small"
                        data-cy="logout"
                        onClick="${() /*: void */ => {
                            screenfull.request().then(() /*: void */ => {
                                // setTimeout(() /*: void */ => {}, 500);
                            });
                        }}"
                        href="/coal/?lat=-35.3082237&lng=149.1222036&elevation=900&scale=500"
                        >Start <i class="material-icons right">login</i></a
                    >
                </div>
            </div>
        </div>
    `;
};

export default Start;
