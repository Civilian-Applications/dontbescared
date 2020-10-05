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
});

/*::
type Props = {
	setVideo: function
};
*/
const StartGetVideo = (props /*: Props */) => {
    //

    return html`
        <div
            data-cy="copy"
            class="${styles.startChild} ${styles.startChildCopy}"
        >
            <p>
                Step 2: Please allow us to display your camera input
            </p>
            <div class="${styles.startChild}">
                <a
                    data-cy="start"
                    class="blue waves-effect waves-light btn-small"
                    onClick="${(e /*: Event */) /*: void */ => {
                        e.preventDefault();
                        const constraints = {
                            video: true,
                        };

                        const video = document.querySelector("video");

                        if (typeof navigator.mediaDevices !== "undefined") {
                            navigator.mediaDevices
                                .getUserMedia(constraints)
                                .then(() /*: void */ => {
                                    props.setVideo(true);
                                });
                        }
                    }}"
                    href="#"
                    >Camera <i class="material-icons right">camera</i></a
                >
            </div>
        </div>
    `;
};
export default StartGetVideo;
