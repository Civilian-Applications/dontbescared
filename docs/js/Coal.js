// @flow
import { h, render } from "../web_modules/preact.js";
import { useState, useEffect } from "../web_modules/preact/hooks.js";
import { createStyles, rawStyles } from "../web_modules/simplestyle-js.js";
import htm from "../web_modules/htm.js";
import * as THREE from "../web_modules/three.js";
import parsedQueryStringParams from "./parsedQueryStringParams.js";

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
	params?: string
};
*/
const Coal = (props /*: Props */) => {
    // State
    const [rotation, setRotation] = useState(0); // - Doesn't work with Flow
    const [then, setThen] = useState(null); // - Doesn't work with Flow
    const [trigger, setTrigger] = useState(0); // - Doesn't work with Flow

    // Defaults
    let searchParams /*: URLSearchParams */;
    let p /*: Params */;
    let lat /*: string */ = "-35.3082237";
    let lng /*: string */ = "149.1222036";
    let elevation /*: string */ = "700";
    let scale /*: string */ = "500";

    // Browser only
    if (typeof process === "undefined" || process.release.name !== "node") {
        if (props.params !== "") {
            p = parsedQueryStringParams(props.params);
            lat = p.lat;
            lng = p.lng;
            elevation = p.elevation;
            scale = p.scale;
        } else {
            searchParams = new URL(document.location.toString()).searchParams;
            lat = searchParams.get("lat") || "";
            lng = searchParams.get("lng") || "";
            elevation = searchParams.get("elevation") || "";
            scale = searchParams.get("scale") || "";
        }
    }

    useEffect(() => {
        // Rotation
        const coalElement /*:  Object  | null */ = document.getElementById(
            "coal",
        );
        const spinTheCoal = (timestamp /*: number */) /*: void */ => {
            if (then === null) {
                setThen(timestamp);
            } else {
                const fpsInterval = 1000 / 24;
                const elapsed = timestamp - then;
                if (elapsed > fpsInterval) {
                    // Get ready for next frame by setting then=now, but also adjust for your
                    // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
                    setThen(timestamp - (elapsed % fpsInterval));

                    if (coalElement !== null) {
                        // console.log("Doing the rotation...");
                        coalElement.object3D.rotation.y += rotation;
                        // For next time....
                        setRotation(rotation + 0.000002);
                    } else {
                        //console.log("Didn't find the coal...");
                    }
                } else {
                    //console.log(elapsed + " !> " + fpsInterval);
                    setTrigger(trigger + 1);
                }
            }
        };
        window.requestAnimationFrame(spinTheCoal);
    });

    return html`
        <a-scene
            embedded
            vr-mode-ui="enabled: false"
            arjs="sourceType:webcam;debugUIEnabled:false;videoTexture:true;"
        >
            <a-assets timeout="30000">
                <a-asset-item
                    id="gltfmodel"
                    src="/img/coal/coal.glb"
                    response-type="arraybuffer"
                ></a-asset-item>
            </a-assets>
            <a-entity
                id="coal"
                position="0 ${elevation} 0"
                scale="${scale} ${scale} ${scale} "
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
            <a-entity light="type: ambient; intensity: 2.5;"></a-entity>
        </a-scene>
    `;
};

export default Coal;
