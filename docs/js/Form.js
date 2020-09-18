// @flow
import { h, render } from "../web_modules/preact.js";
import { useState, useEffect } from "../web_modules/preact/hooks.js";
import { createStyles, rawStyles } from "../web_modules/simplestyle-js.js";
import htm from "../web_modules/htm.js";
import FormInputLat from "./FormInputLat.js";
import FormInputLng from "./FormInputLng.js";
import FormInputElevation from "./FormInputElevation.js";
import FormInputScale from "./FormInputScale.js";

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
    //
    useEffect(() => {});

    return html`
        <form action="/coal/" method="GET">
            <fieldset>
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
