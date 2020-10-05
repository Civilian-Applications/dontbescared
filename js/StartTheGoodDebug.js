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
});

/*::
type Props = {
};
*/
const StartTheGood = (props /*: Props */) => {
    // State
    const [state, dispatch] = useContext(AppContext); // - Doesn't work with Flow

    return html`
        <div>
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
