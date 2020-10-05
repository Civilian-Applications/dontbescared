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
    problem: {
        color: "red",
        marginBottom: "1rem",
        textAlign: "center",
    },
    li: {
        marginBottom: ".2rem",
        textAlign: "left",
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
                let placeholderIOS = false;
                if (
                    navigator.userAgent.match(/iPhone/i) ||
                    navigator.userAgent.match(/iPad/i)
                ) {
                    placeholderIOS = true;
                }

                if (
                    typeof props.problem !== "undefined" &&
                    placeholderIOS === true
                ) {
                    return html`
                        <p class="${styles.problem}">${props.problem}</p>
                        <p>Please check your phone settings and try again.</p>
                        <p>
                            Enabling iOS Location Services:
                        </p>
                        <ol>
                            <li class="${styles.li}">
                                Go to Settings > Privacy > Location Services.
                            </li>
                            <li class="${styles.li}">
                                Make sure that Location Services is on.
                            </li>
                            <li class="${styles.li}">
                                Scroll down to find the Safari app.
                            </li>
                            <li class="${styles.li}">
                                Tap the app and select "While Using the App"
                                Allows access to Location Services only when the
                                app or one of its features is visible on the
                                screen
                            </li>
                        </ol>
                    `;
                } else if (
                    typeof props.problem !== "undefined" &&
                    placeholderIOS === false
                ) {
                    return html`
                        <p class="${styles.problem}">${props.problem}</p>
                        ;
                    `;
                } else {
                    return html`
                        <p>
                            Thanks for trying it out. There are a few things we
                            need to check on your phone.
                        </p>
                    `;
                }
            })()}
            <p>
                Step 1: Please allow us to use your location
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
