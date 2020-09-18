// @flow
import { h, render } from "../web_modules/preact.js";
import {
    useState,
    useEffect,
    useContext,
} from "../web_modules/preact/hooks.js";
import { AppContext } from "./AppContext.js";
import { createStyles, rawStyles } from "../web_modules/simplestyle-js.js";
import htm from "../web_modules/htm.js";

const html = htm.bind(h);
rawStyles({});
const [styles] = createStyles({});

/*::
type Props = {
};
*/
const FormInputElevation = (props /*: Props */) => {
    // State
    const [state, dispatch] = useContext(AppContext); // - Doesn't work with Flow

    useEffect(() => {
        console.log(state.elevation);
    });

    return html`
        <div class="input-field">
            <input
                type="text"
                data-cy="elevation"
                name="elevation"
                onInput="${(e /*: SyntheticInputEvent<EventTarget> */) => {
                    dispatch({
                        type: "UPDATE_ELEVATION",
                        payload: e.target.value,
                    });
                }}"
                type="number"
                size="10"
                step="1"
                title="Numbers only."
                value="${state.elevation}"
                required
            />
            <label class="no-pointer-event" for="elevation">Elevation:</label>
        </div>
    `;
};

export default FormInputElevation;
