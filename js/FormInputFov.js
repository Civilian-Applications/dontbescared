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

const [styles] = createStyles({
    textInput: {
        color: "white",
    },
});

/*::
type Props = {
};
*/
const FormInputFov = (props /*: Props */) => {
    // State
    const [state, dispatch] = useContext(AppContext); // - Doesn't work with Flow

    useEffect(() => {
        console.log(state);
    });

    return html`
        <div class="input-field">
            <input
                type="text"
                class="${styles.textInput}"
                data-cy="fov"
                name="fov"
                onInput="${(e /*: SyntheticInputEvent<EventTarget> */) => {
                    dispatch({ type: "UPDATE_FOV", payload: e.target.value });
                }}"
                type="number"
                size="10"
                step="0.000000001"
                title="Numbers only."
                value="${state.fov}"
                required
            />
            <label class="no-pointer-event" for="fov">Fov:</label>
        </div>
    `;
};

export default FormInputFov;
