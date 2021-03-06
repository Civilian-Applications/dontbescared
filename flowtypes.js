type AppState = {
    fov: number,
    lat: number,
    lng: number,
    elevation: number,
    scale: number,
    rememberme: Boolean,
};

type Params = {
    fov: string,
    lat: string,
    lng: string,
    elevation: string,
    scale: string,
};

type Coords = {
    latitude: number,
    longitude: number,
    altitude?: number,
    accuracy: number,
    altitudeAccuracy?: number,
    heading?: number,
    speed?: number,
};

type Pos = {
    coords: Coords,
    timestamp: number,
};
declare module "finalhandler" {
    declare module.exports: any;
}

declare module "../web_modules/immer.js" {
    declare module.exports: any;
}

declare module "../web_modules/three.js" {
    declare module.exports: any;
}

declare module "../../web_modules/three.js" {
    declare module.exports: any;
}

declare module "../web_modules/screenfull.js" {
    declare module.exports: any;
}

declare module "../web_modules/preact.js" {
    declare module.exports: any;
}

declare module "../web_modules/preact-render-to-string.js" {
    declare module.exports: any;
}

declare module "serve-static" {
    declare module.exports: any;
}

declare module "glob" {
    declare module.exports: any;
}

declare module "../web_modules/should/as-function.js" {
    declare module.exports: any;
}

declare module "../web_modules/preact/hooks.js" {
    declare module.exports: any;
}

declare module "../web_modules/simplestyle-js.js" {
    declare module.exports: any;
}

declare module "../web_modules/htm.js" {
    declare module.exports: any;
}

declare module "../web_modules/preact-router.js" {
    declare module.exports: any;
}

declare module "../web_modules/preact-router/match.js" {
    declare module.exports: any;
}

declare module "../web_modules/history.js" {
    declare module.exports: any;
}
