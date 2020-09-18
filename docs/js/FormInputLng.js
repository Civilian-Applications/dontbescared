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
const FormInputLng = (props /*: Props */) => {
    // State
    const [state, dispatch] = useContext(AppContext); // - Doesn't work with Flow

    useEffect(() => {
        console.log(state.lng);
    });

    return html`
        <div class="input-field">
            <input
                type="text"
                data-cy="lng"
                name="lng"
                onInput="${(e /*: SyntheticInputEvent<EventTarget> */) => {
                    dispatch({
                        type: "UPDATE_LNG",
                        payload: e.target.value,
                    });
                }}"
                type="number"
                size="10"
                step="0.000000001"
                title="Numbers only."
                value="${state.lng}"
                required
            />
            <label class="no-pointer-event" for="lng">Lng:</label>
        </div>
    `;
};

export default FormInputLng;
