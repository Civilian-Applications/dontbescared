// @flow
import { h, render } from "../web_modules/preact.js";
import { useState, useEffect } from "../web_modules/preact/hooks.js";
import { Router, Link } from "../web_modules/preact-router.js";
import { createStyles, rawStyles } from "../web_modules/simplestyle-js.js";
import screenfull from "../web_modules/screenfull.js";
import htm from "../web_modules/htm.js";

const html = htm.bind(h);
rawStyles({});
const [styles] = createStyles({
    homeContainer: {
        height: "100%",
        backgroundImage: "url(/img/dbs_background.2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    contentContainer: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "1rem",
        margin: "0 1rem",
    },
    homeChild: {
        margin: "0 auto",
        marginBottom: "1rem",
    },
    homeChildCopy: {
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
const Home = (props /*: Props */) => {
    //

    return html`
        <div class="${styles.homeContainer}">
            <div class="${styles.contentContainer}">
                <div
                    data-cy="copy"
                    class="${styles.homeChild} ${styles.homeChildCopy}"
                >
                    <h1>
                        Don't Be Scared
                    </h1>
                    <p>
                        In February 2017, then Australian Treasurer Scott
                        Morrison brought a lump of coal into parliament and told
                        us not to be scared.
                    </p>
                    <p>
                        The proposed Adani Coal mine in Queensland is predicted
                        to produce 2.3 billion tonnes of coal. Our
                        augmented-reality artwork visualises what it would look
                        like if Scott Morrison brought it to parliament.
                    </p>
                    <div class="${styles.homeChild}">
                        <a
                            data-cy="start"
                            class="blue waves-effect waves-light btn-small"
                            href="https://youtu.be/VlCRzogXy9s"
                            >Watch a video
                            <i class="material-icons right"
                                >play_circle_outline</i
                            ></a
                        >
                    </div>
                    <div class="${styles.homeChild}">
                        <a
                            data-cy="start"
                            class="blue waves-effect waves-light btn-small"
                            href="/appointment"
                            >Book a viewing
                            <i class="material-icons right">event</i></a
                        >
                    </div>
                    <div class="${styles.homeChild}">
                        <a
                            data-cy="start"
                            class="blue waves-effect waves-light btn-small"
                            href="/start"
                            >See the artwork now
                            <i class="material-icons right">login</i></a
                        >
                    </div>
                </div>
            </div>
        </div>
    `;
};

export default Home;
