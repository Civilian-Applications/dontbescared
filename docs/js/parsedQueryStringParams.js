// @flow
// import { test, testPromise, should } from "../server/testy.js";

const parsedQueryStringParams /*: function */ = (
    queryString /*: string */,
) /*: Params  */ => {
    const keyValuePairs /*: Array<string> */ = queryString.split("&");
    const keyValuePairsAsObjects /*: Array<Object> */ = keyValuePairs.map((
        keyValuePair /*: string */,
    ) /*: Object */ => {
        const keyAndValue /*: Array<string> */ = keyValuePair.split("=");
        return {
            key: keyAndValue[0],
            value: keyAndValue[1],
        };
    });
    const params = {};
    keyValuePairsAsObjects.forEach((
        keyValueObject /*: Object */,
    ) /*: void */ => {
        params[keyValueObject.key] = keyValueObject.value;
    });
    return params;
};

// test("parsedQueryStringParams does what it says on the box", () /*: void */ => {
//     const queryString = "fov=76&lat=39.45&lng=149.2345&elevation=745&scale=500";
//     const expectedParamsObject /*: Params */ = {
//         lat: "39.45",
//         lng: "149.2345",
//         elevation: "745",
//         scale: "500",
//     };
//     const returnedParamsObject /*: Params */ = parsedQueryStringParams(
//         queryString,
//     );
//     should(returnedParamsObject).eql(expectedParamsObject);
// });

export default parsedQueryStringParams;
