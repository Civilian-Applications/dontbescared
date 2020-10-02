// @flow
import { h, render } from "../web_modules/preact.js";
import { Router, Link } from "../web_modules/preact-router.js";
import { createStyles, rawStyles } from "../web_modules/simplestyle-js.js";
import { useContext } from "../web_modules/preact/hooks.js";
import { AppContext } from "./AppContext.js";
import screenfull from "../web_modules/screenfull.js";
import htm from "../web_modules/htm.js";

const html = htm.bind(h);
rawStyles({});
const [styles] = createStyles({
    startChild: {
        margin: "0 auto",
        marginBottom: "1rem",
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
const StartTheGood = (props /*: Props */) => {
    // State
    const [state, dispatch] = useContext(AppContext); // - Doesn't work with Flow

    return html`
        <div
            data-cy="copy"
            class="${styles.startChild} ${styles.startChildCopy}"
        >
            <p>
                You made it!
            </p>
            <p>
                Step 3: This is the test interface so there are two locations
                below. Pick the one near you to see the augmented-reality
                artwork.
            </p>
            <div class="${styles.startChild}">
                <a
                    data-cy="start"
                    class="blue waves-effect waves-light btn-small"
                    onClick="${() /*: void */ => {
                        screenfull.request().then(() /*: void */ => {
                            const localState = {
                                fov: 76,
                                lat: -35.306203,
                                lng: 149.1250937,
                                elevation: 1400,
                                scale: 1000,
                            };
                            dispatch({
                                type: "UPDATE_ALL",
                                payload: localState,
                            });
                        });
                    }}"
                    href="/coal/?fov=${76}&lat=${-35.306203}&lng=${149.1250937}&elevation=${1400}&scale=${1000}"
                    >Parliament <i class="material-icons right">login</i></a
                >
            </div>
            <div class="${styles.startChild}">
                <a
                    data-cy="start"
                    class="blue waves-effect waves-light btn-small"
                    onClick="${() /*: void */ => {
                        screenfull.request().then(() /*: void */ => {
                            const localState = {
                                fov: 76,
                                lat: -33.521331,
                                lng: 151.346974,
                                elevation: 600,
                                scale: 500,
                            };
                            dispatch({
                                type: "UPDATE_ALL",
                                payload: localState,
                            });
                        });
                    }}"
                    href="/coal/?fov=76&lat=-33.521331&lng=151.346974&elevation=600&scale=500"
                    href="/coal/?fov=${76}&lat=${-33.521331}&lng=${151.346974}&elevation=${600}&scale=${500}"
                    >The Bay <i class="material-icons right">login</i></a
                >
            </div>
            <div class="${styles.startChild}">
                <a
                    data-cy="start"
                    class="blue waves-effect waves-light btn-small"
                    onClick="${() /*: void */ => {
                        screenfull.request().then(() /*: void */ => {
                            const localState = {
                                fov: 76,
                                lat: -33.533286,
                                lng: 151.360658,
                                elevation: 400,
                                scale: 200,
                            };
                            dispatch({
                                type: "UPDATE_ALL",
                                payload: localState,
                            });
                        });
                    }}"
                    href="/coal/?fov=${76}&lat=${-33.533286}&lng=${151.360658}&elevation=${400}&scale=${200}"
                    >Killcare Beach<i class="material-icons right">login</i></a
                >
            </div>
        </div>
    `;
};
export default StartTheGood;
