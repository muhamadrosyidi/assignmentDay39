const httpMocks = require("node-mocks-http");
const mathHandler = require("../fungsi/math.js");

test('2020-06-12', async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date('2020-06-12'));
    
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-leap-year",
    });
    
    const response = httpMocks.createResponse();
    
    await mathHandler.checkisLeapYear(request, response);
    
    expect(response.statusCode).toEqual(200);
    
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});