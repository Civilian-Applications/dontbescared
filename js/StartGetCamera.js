// @flow
import { h, render } from "../web_modules/preact.js";
import { useEffect } from "../web_modules/preact/hooks.js";
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
    problem: {
        color: "red",
        marginBottom: "1rem",
        textAlign: "center",
    },
});

/*::
type Props = {
	setVideo: function,
	distanceFromParliament: null | number
};
*/
const StartGetVideo = (props /*: Props */) => {
    //
    useEffect(() => {
        // $FlowFixMe
        ga("set", "page", "/start#camera");
        ga("send", "pageview");
        console.log("/start#camera");
    }, []);

    return html`
        <div
            data-cy="copy"
            class="${styles.startChild} ${styles.startChildCopy}"
        >
            ${(() => {
                if (
                    props.distanceFromParliament !== null &&
                    props.distanceFromParliament > 10
                ) {
                    return html`
                        <p class="${styles.problem}">
                            You seem to be about ${"\xa0"}
                            ${props.distanceFromParliament.toString()}km away
                            from Parliament House. You need to be in Canberra
                            and within 10km of Parliament to view this artwork.
                            You can continue but you won't see the coal. Why not
                            ${"\xa0"}
                            <a href="https://www.instagram.com/p/CF86rNoA7Fp/"
                                >watch the video</a
                            >
                            ${"\xa0"} instead?
                        </p>
                        <p class="${styles.problem}">
                            Or better still, if you're planning to visit the
                            Contour 556 Festval, ${"\xa0"}
                            <a href="/book">book us in for a viewing</a> while
                            you’re there.
                        </p>
                    `;
                } else {
                    return html``;
                }
            })()}
            <p>
                Step 2: Please allow us to display your camera input
            </p>
            <div class="${styles.startChild}">
                <a
                    data-cy="camera"
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
