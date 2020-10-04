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
        fontSize: "1rem",
        marginBottom: "1rem",
        textAlign: "center",
    },
});

/*::
type Props = {
	setCoords: function,
	setLocation: function,
	problem?: string
};
*/
const StartGetLocation = (props /*: Props */) => {
    //

    return html`
        <div
            data-cy="copy"
            class="${styles.startChild} ${styles.startChildCopy}"
        >
            ${(() => {
                if (typeof props.problem !== "undefined") {
                    return html` <p>${props.problem}. Please try again.</p> `;
                } else {
                    return html`
                        <p>
                            Don't be scared!
                        </p>
                        <p>
                            Thanks for visiting. There are a few things we need
                            to check on your phone.
                        </p>
                    `;
                }
            })()}
            <p>
                Step 1: Check your location
            </p>
            <div class="${styles.startChild}">
                <a
                    data-cy="start"
                    class="blue waves-effect waves-light btn-small"
                    onClick="${(e /*: Event */) /*: void */ => {
                        e.preventDefault();

                        var options = {
                            enableHighAccuracy: false,
                            timeout: 5000,
                            maximumAge: 0,
                        };

                        const success = (pos /*: Position */) /*: void */ => {
                            props.setCoords(pos.coords);
                            props.setLocation(true);
                        };

                        const error = (err /*: Object */) /*: void */ => {
                            props.setLocation(
                                `ERROR(${err.code}): ${err.message}`,
                            );
                        };

                        navigator.geolocation.getCurrentPosition(
                            success,
                            error,
                            options,
                        );
                    }}"
                    href="#"
                    >Location <i class="material-icons right">location_on</i></a
                >
            </div>
        </div>
    `;
};
export default StartGetLocation;
