// @flow
import conf from "./config.js";
import { h, render, createContext } from "../web_modules/preact.js";
import { useReducer } from "../web_modules/preact/hooks.js";
import htm from "../web_modules/htm.js";
import produce from "../web_modules/immer.js";
import stateStorage from "./state_storage.js";
import Router from "../web_modules/preact-router.js";

const html = htm.bind(h);

// A context for the state global management
const AppContext = createContext([{}, () => {}]);

const reducer = (state, action) =>
    // https://www.pika.dev/npm/@vve/immer
    produce(state, (draft) => {
        if (action.type === "UPDATE_ALL") {
            draft.lat = action.payload.lat;
            draft.lng = action.payload.lng;
            draft.elevation = action.payload.elevation;
            draft.scale = action.payload.scale;
        }
        if (action.type === "UPDATE_LAT") {
            draft.lat = action.payload;
        }
        if (action.type === "UPDATE_LNG") {
            draft.lng = action.payload;
        }
        if (action.type === "UPDATE_ELEVATION") {
            draft.elevation = action.payload;
        }
        if (action.type === "UPDATE_SCALE") {
            draft.scale = action.payload;
        }
        if (action.type === "RESET") {
            draft.lat = action.payload.lat;
            draft.lng = action.payload.lng;
            draft.elevation = action.payload.elevation;
            draft.scale = action.payload.scale;
        }
    });

/*::
type Props = {
	children: Array<function>;
};
*/
const AppProvider /*: function */ = (props /*: Props */) => {
    // State
    const [state, dispatch] = useReducer(reducer, {}); // Doesn't work with Flow

    // Browser only
    if (typeof process === "undefined" || process.release.name !== "node") {
        // If this is the first reload, load the state from the stateStorage.
        if (JSON.stringify(state) === JSON.stringify({})) {
            //
            // Load data from stateStorage
            // https://developer.mozilla.org/en-US/docs/Web/API/Storage
            let sessionStateString /*: string | null | typeof undefined */ = stateStorage.getItem(
                "state",
                state.rememberme,
            );
            if (
                JSON.stringify(state) === JSON.stringify({}) &&
                (typeof sessionStateString === "undefined" ||
                    sessionStateString === null)
            ) {
                // The state is, as yet, unset and there
                // was nothing in the session state, so
                // try the localStorage
                sessionStateString = stateStorage.getItem("state", true);
            }

            // To stop Flow complaining about potentially passing
            /// `null` or `typeof undefined` to JSON.parse()
            if (
                typeof sessionStateString !== "undefined" &&
                sessionStateString !== null
            ) {
                // The string coming from sessionStateStorage might
                // not be JSON.
                try {
                    dispatch({
                        type: "RESET",
                        payload: JSON.parse(sessionStateString),
                    });
                } catch (e) {
                    stateStorage.clear(state.rememberme);
                }
            }
        }

        if (JSON.stringify(state) !== JSON.stringify({})) {
            // Store the state in stateStorage on every render-loop
            stateStorage.setItem(
                "state",
                JSON.stringify(state),
                conf.REMEMBER_ME,
            );
        }
    }

    return html`
      <${AppContext.Provider} value=${[state, dispatch]}>
				${props.children}
      </${AppContext.Provider}>
  `;
};

export { AppContext, AppProvider };
