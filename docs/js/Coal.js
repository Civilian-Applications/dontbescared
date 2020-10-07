// @flow
import { h, render } from "../web_modules/preact.js";
import { useState, useEffect } from "../web_modules/preact/hooks.js";
import { createStyles, rawStyles } from "../web_modules/simplestyle-js.js";
import htm from "../web_modules/htm.js";
import * as THREE from "../web_modules/three.js";
import parsedQueryStringParams from "./parsedQueryStringParams.js";

const html = htm.bind(h);
rawStyles({});

/*::
type Props = {
	params?: string
};
*/
const Coal = (props /*: Props */) => {
    // State for coordinates
    const [coordinates, setCoordinates] = useState(false); // - Doesn't work with Flow
    const [fov, setFov] = useState("76"); // - Doesn't work with Flow
    const [lat, setLat] = useState("-35.306203"); // - Doesn't work with Flow
    const [lng, setLng] = useState("149.1250937"); // - Doesn't work with Flow
    const [elevation, setElevation] = useState("1400"); // - Doesn't work with Flow
    const [scale, setScale] = useState("1000"); // - Doesn't work with Flow
    // State for rotation
    const [rotation, setRotation] = useState(0); // - Doesn't work with Flow
    const [then, setThen] = useState(null); // - Doesn't work with Flow
    const [trigger, setTrigger] = useState(0); // - Doesn't work with Flow
    //
    useEffect(() => {
        // $FlowFixMe
        ga("set", "page", "/coal");
        ga("send", "pageview");
        console.log("/coal");
    }, []);

    useEffect(() => {
        // Pulling params from the URL in various ways
        if (props.params !== "" && coordinates === false) {
            let p /*: Params */ = parsedQueryStringParams(props.params);
            setFov(p.fov);
            setLat(p.lat);
            setLng(p.lng);
            setElevation(p.elevation);
            setScale(p.scale);
            setCoordinates(true);
        } else {
            let searchParams /*: URLSearchParams */ = new URL(
                document.location.toString(),
            ).searchParams;
            if (
                searchParams.has("fov") &&
                searchParams.has("lat") &&
                searchParams.has("lng") &&
                searchParams.has("elevation") &&
                searchParams.has("scale") &&
                coordinates === false
            ) {
                setFov(searchParams.get("fov"));
                setLat(searchParams.get("lat"));
                setLng(searchParams.get("lng"));
                setElevation(searchParams.get("elevation"));
                setScale(searchParams.get("scale"));
            }
        }

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

    // <a-assets timeout="30000">
    //     <a-asset-item
    //         id="gltfmodel"
    //         src="/img/coal/coal.glb"
    //         response-type="arraybuffer"
    //     ></a-asset-item>
    // </a-assets>
    return html`
        <a-scene
            embedded
            vr-mode-ui="enabled: false"
            arjs="sourceType:webcam;debugUIEnabled:false;videoTexture:true;"
        >
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
                far="10000"
                fov="${fov}"
                rotation-reader
                gps-camera="
					positionMinAccuracy:1000;
					minDistance:0;
					maxDistance:0;"
            ></a-camera>
            <!-- LIGHTING-->
            <a-entity light="type: ambient; intensity: 2.5;"></a-entity>
        </a-scene>
    `;
};

export default Coal;
