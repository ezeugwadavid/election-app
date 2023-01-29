const Request = require("request");

describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require("../server");
    });
    describe("POST /pollingresults", () => {
        const statusData = {

        }
        beforeAll((done) => {
            const data = { polling_unit_name: 'Primary School in Aghara' };
            postConfig = {},
            postSuccessHandler = null;
        
        
        //the config for our HTTP POST request
        postConfig = {
            url:'http://localhost:5000/election//pollingresults',
            form: data
        };
        
        //the HTTP POST request success handler
        postSuccessHandler = function (err, httpResponse, body) {
            //look for this message in your JS console:
            console.log('JSON response from the server: ' + body);
        };
        
        //make the POST request
       const response = Request.post(postConfig, postSuccessHandler);
       statusData.statusCode = response.statusCode;
       console
       done();
            });
        });
        it("Status 200", () => {
            expect(statusData.statusCode).toBe(200);
        });
   
   
});
