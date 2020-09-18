// @flow
import { h, render } from "../web_modules/preact.js";
import {
    useState,
    useEffect,
    useContext,
} from "../web_modules/preact/hooks.js";
import { AppContext } from "./AppContext.js";
import { createStyles, rawStyles } from "../web_modules/simplestyle-js.js";
import screenfull from "../web_modules/screenfull.js";
import htm from "../web_modules/htm.js";

const html = htm.bind(h);
rawStyles({
    body: {
        margin: "0px",
        overflow: "hidden",
    },
    canvas: {
        margin: "0px",
        overflow: "hidden",
    },
});

/*::
type Props = {
	params: string
};
*/
const Coal = (props /*: Props */) => {
    // State
    const [state, dispatch] = useContext(AppContext); // - Doesn't work with Flow

    // Defaults
    let p = new URL(document.location.toString()).searchParams;
    let lat /*: string */ = "";
    let lng /*: string */ = "";
    let elevation /*: string */ = "";
    let scale /*: string */ = "";
    // Browser only

    if (typeof process === "undefined" || process.release.name !== "node") {
        p = new URL(document.location.toString()).searchParams;
        lat = p.get("lat") || "-35.3082237";
        lng = p.get("lng") || "149.1222036";
        elevation = p.get("elevation") || "700";
        scale = p.get("scale") || "500";

        console.log(lat);
        console.log(lng);
        console.log(elevation);
        console.log(scale);
    }

    useEffect(() => {
        // Events
        const mainContainer = document.getElementById("goodthing") || null;
        if (mainContainer !== null) {
            // Modernizr doesn't have an es module npm package so it's
            // imported with a <script> tag in `index.html`
            // $FlowFixMe
            if (Modernizr.hasEvent("touchend")) {
                mainContainer.addEventListener(
                    "touchend",
                    () => {
                        // const localState = { lat, lng, elevation, scale };
                        // dispatch({ type: "UPDATE_ALL", localState });
                        // Doesn't work on iPhone ~ https://caniuse.com/#feat=fullscreen
                        // Plus we only want fullscreen on touch devices
                        screenfull.request().then(() /*: void */ => {
                            setTimeout(() /*: void */ => {}, 500);
                        });
                    },
                    { once: true },
                );
            }
        }
    });

    return html`
        <a-scene
            embedded
            vr-mode-ui="enabled: false"
            arjs="sourceType: webcam; debugUIEnabled: false;videoTexture: true;"
        >
            <a-assets timeout="30000">
                <a-asset-item
                    id="gltfmodel"
                    src="/img/coal/coal.glb"
                    response-type="arraybuffer"
                ></a-asset-item>
            </a-assets>
            <a-entity
                position="0 ${elevation} 0"
                scale="${scale} ${scale} ${scale} "
                look-at="[gps-camera]"
                gps-entity-place="latitude: ${lat}; longitude: ${lng};"
            >
                <a-entity
                    position="0 0 0"
                    scale="0 0 0"
                    gltf-model="url(/img/coal/coal.glb)"
                >
                </a-entity>
            </a-entity>
            <a-camera
                near="1"
                far="70000"
                fov="76"
                rotation-reader
                gps-camera="
			positionMinAccuracy:10000;
			minDistance:0;
			maxDistance:0;"
            ></a-camera>
            <!-- LIGHTING-->
            <a-entity light="type: ambient; intensity: 10.5;"></a-entity>
        </a-scene>
    `;
};
// simulateAltitude:500;
// simulateLatitude:-35.30822;
// simulateLongitude:149.1239828;"
// Elevation: https://elvis2018-ga.fmecloud.com/fmedatastreaming/client_access/ELVIS_GetElevationAtPoint.fmw?pt_lat=-35.3082237&pt_long=149.1222036

export default Coal;
