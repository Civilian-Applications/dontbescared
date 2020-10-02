// @flow
import { h, render } from "../web_modules/preact.js";
import { route } from "../web_modules/preact-router.js";
import { useContext } from "../web_modules/preact/hooks.js";
import { AppContext } from "./AppContext.js";
import { createStyles, rawStyles } from "../web_modules/simplestyle-js.js";
import htm from "../web_modules/htm.js";
import FormInputFov from "./FormInputFov.js";
import FormInputLat from "./FormInputLat.js";
import FormInputLng from "./FormInputLng.js";
import FormInputElevation from "./FormInputElevation.js";
import FormInputScale from "./FormInputScale.js";
import screenfull from "../web_modules/screenfull.js";

const html = htm.bind(h);
rawStyles({
    canvas: {
        margin: "0px",
        overflow: "hidden",
    },
});
const [styles] = createStyles({});

/*::
type Props = {
};
*/
const Form = (props /*: Props */) => {
    // State
    const [state, dispatch] = useContext(AppContext); // - Doesn't work with Flow

    return html`
        <form
            action="/coal/"
            method="GET"
            onSubmit="${(e /*:  Event */) /*: void */ => {
                e.preventDefault();
                screenfull.request().then(() /*: void */ => {
                    // setTimeout(() /*: void */ => {}, 500);
                    route(
                        `/coal/fov=${state.fov}&lat=${state.lat}&lng=${state.lng}&elevation=${state.elevation}&scale=${state.scale}`,
                    );
                });
            }}"
        >
            <fieldset>
                <div class="row">
                    <${FormInputFov} />
                </div>
                <div class="row">
                    <${FormInputLat} />
                </div>
                <div class="row">
                    <${FormInputLng} />
                </div>
                <div class="row">
                    <${FormInputElevation} />
                </div>
                <div class="row">
                    <${FormInputScale} />
                </div>

                <div class="row">
                    <button
                        data-cy="submit"
                        class="btn-small blue waves-effect waves-light"
                        type="submit"
                    >
                        Go
                        <i class="material-icons right">login</i>
                    </button>
                </div>
            </fieldset>
        </form>
    `;
};

export default Form;
