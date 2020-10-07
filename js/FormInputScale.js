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
const FormInputScale = (props /*: Props */) => {
    // State
    const [state, dispatch] = useContext(AppContext); // - Doesn't work with Flow

    useEffect(() => {
        console.log(state.scale);
    });

    return html`
        <div class="input-field">
            <input
                type="text"
                class="${styles.textInput}"
                data-cy="scale"
                name="scale"
                onInput="${(e /*: SyntheticInputEvent<EventTarget> */) => {
                    dispatch({
                        type: "UPDATE_SCALE",
                        payload: e.target.value,
                    });
                }}"
                type="number"
                size="10"
                step="1"
                title="Numbers only."
                value="${state.scale}"
                required
            />
            <label class="no-pointer-event" for="scale">Scale:</label>
        </div>
    `;
};

export default FormInputScale;
