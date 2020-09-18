// @flow
import { h, render } from "../web_modules/preact.js";
import { useState, useEffect } from "../web_modules/preact/hooks.js";
import { createStyles, rawStyles } from "../web_modules/simplestyle-js.js";
import screenfull from "../web_modules/screenfull.js";
import htm from "../web_modules/htm.js";

const html = htm.bind(h);
rawStyles({
    canvas: {
        margin: "0px",
        overflow: "hidden",
    },
});

/*::
type Props = {
};
*/
const Start = (props /*: Props */) => {
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
        <div>
            <div>
                <a
                    activeClassName="active"
                    href="/coal/${encodeURIComponent(
                        "lat=-39.45&lng=149.2345&elevation=745&scale=500",
                    )}"
                    >Parliament</a
                >
            </div>
            <div>
                <a
                    activeClassName="active"
                    href="/coal/${encodeURIComponent(
                        "lat=-33.521331&lng=151.346974&elevation=750&scale=200",
                    )}"
                    >The bay</a
                >
            </div>
        </div>
    `;
};

export default Start;
