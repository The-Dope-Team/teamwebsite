import load_braunson_url from '../utils/load_braunson_url.mjs';
import assert from assert

it ("Tests Braunson URL Endpoint", async ()=>{
    const urlresponse = await load_braunson_url();
    console.log("URL Response: ")+urlresponse;
    assert.equal(urlresponse, "Hello Braunson");

});