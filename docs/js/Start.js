// @flow
import { h, render } from "../web_modules/preact.js";
import { useState, useEffect } from "../web_modules/preact/hooks.js";
import { Router, Link } from "../web_modules/preact-router.js";
import { createStyles, rawStyles } from "../web_modules/simplestyle-js.js";
import { distance } from "./distance.js";
import screenfull from "../web_modules/screenfull.js";
import htm from "../web_modules/htm.js";
import StartTheBad from "./StartTheBad.js";
import StartGetLocation from "./StartGetLocation.js";
import StartGetCamera from "./StartGetCamera.js";
import StartTheGood from "./StartTheGood.js";

const html = htm.bind(h);
rawStyles({});
const [styles] = createStyles({
    startContainer: {
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
});

/*::
type Props = {
};
*/
const Start = (props /*: Props */) => {
    //
    const [coords /*: Coordinates */, setCoords] = useState({});
    const [video /*: Coordinates */, setVideo] = useState(false);
    const [location /*: null | string | true */, setLocation] = useState(null);
    const [
        distanceFromParliament /*: null | number */,
        setDistanceFromParliament,
    ] = useState(null);

    useEffect(() => {
        const parliamentLat /*: number */ = -35.306203;
        const parliamentLng = 149.1250937;
        setDistanceFromParliament(
            Math.floor(
                distance(
                    parliamentLat,
                    parliamentLng,
                    coords.latitude,
                    coords.longitude,
                    "K",
                ),
            ),
        );
    }, [coords]);

    useEffect(() => {
        console.log("Here, setting the distance: ", distanceFromParliament);
    }, [distanceFromParliament]);

    return html`
        <div class="${styles.startContainer}">
            <div class="${styles.contentContainer}">
                ${(() => {
                    // $FlowFixMe
                    if (!Modernizr.getusermedia) {
                        return html`<${StartTheBad} />`;
                    } else if (
                        (coords.latitude === undefined ||
                            coords.longitude === undefined) &&
                        location === null
                    ) {
                        return html`<${StartGetLocation}
                            setCoords=${setCoords}
                            setLocation=${setLocation}
                        />`;
                    } else if (typeof location === "string") {
                        return html`<${StartGetLocation}
                            setCoords=${setCoords}
                            setLocation=${setLocation}
                            problem="${location}"
                        />`;
                    } else if (video === false) {
                        return html`<${StartGetCamera}
                            distanceFromParliament="${distanceFromParliament}"
                            setVideo=${setVideo}
                        />`;
                    } else {
                        return html`<${StartTheGood} />`;
                    }
                })()}
            </div>
        </div>
    `;
};

export default Start;
