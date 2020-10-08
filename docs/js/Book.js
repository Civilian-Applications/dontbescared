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
    appointementContainer: {
        height: "100%",
        overflow: "auto",
    },
    contentContainer: {
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "1rem",
        margin: "0 1rem",
    },
    appointementChild: {
        margin: "0 auto",
        marginBottom: "1rem",
    },
    appointementChildCopy: {
        color: "white",
        marginBottom: "1rem",
        textAlign: "center",
    },
});

/*::
type Props = {
};
*/
const Appointement = (props /*: Props */) => {
    //
    return html`
        <div class="${styles.appointementContainer}">
            <div class="${styles.contentContainer}">
                <div
                    data-cy="copy"
                    class="${styles.appointementChild} ${styles.appointementChildCopy}"
                >
                    <p>
                        Maybe you're not currently on location in Canberra. Or,
                        because this work uses new technology, it might not be
                        working on your phone. Maybe it's just a bit confusing.
                    </p>
                    <p>
                        We would love to meet you ${"\xa0"}
                        <a href="https://goo.gl/maps/Q9v3DJ5kggJwi8Un8">
                            here on the foreshore of Lake Burley Griffin in
                            Canberra</a
                        >${"\xa0"} during the Contour 556 festival to show you
                        the work.
                    </p>
                    <p>
                        The link below will take you to the Calendly scheduling
                        service where you can book a time. We look forward to
                        meeting you.
                    </p>
                    <div class="${styles.appointementChild}">
                        <a
                            data-cy="start"
                            class="blue waves-effect waves-light btn-small"
                            href="https://calendly.com/civapps/15min?back=1&month=2020-10"
                            >Book a viewing
                            <i class="material-icons right">event</i></a
                        >
                    </div>
                </div>
            </div>
        </div>
    `;
};

export default Appointement;
