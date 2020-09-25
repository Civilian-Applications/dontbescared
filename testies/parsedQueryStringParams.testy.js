// @flow
import parsedQueryStringParams from "../js/parsedQueryStringParams.js";
import { test, testPromise, should } from "../server/testy.js";

test("parsedQueryStringParams does what it says on the box", () /*: void */ => {
    const queryString = "lat=39.45&lng=149.2345&elevation=745&scale=500";
    const expectedParamsObject /*: Params */ = {
        lat: "39.45",
        lng: "149.2345",
        elevation: "745",
        scale: "500",
    };
    const returnedParamsObject /*: Params */ = parsedQueryStringParams(
        queryString,
    );
    should(returnedParamsObject).eql(expectedParamsObject);
});
