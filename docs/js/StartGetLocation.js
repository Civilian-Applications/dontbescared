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
	setCoords: function
};
*/
const StartGetLocation = (props /*: Props */) => {
    //

    return html`
        <div
            data-cy="copy"
            class="${styles.startChild} ${styles.startChildCopy}"
        >
            <p>
                Step 1: Verify your location
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

                            console.log("Your current position is:");
                            console.log(
                                `Latitude : ${pos.coords.latitude || ""}`,
                            );
                            console.log(
                                `Longitude: ${pos.coords.longitude || ""}`,
                            );
                            console.log(
                                `More or less ${
                                    pos.coords.accuracy || ""
                                } meters.`,
                            );
                        };

                        function error(err) {
                            console.warn(`ERROR(${err.code}): ${err.message}`);
                        }

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
