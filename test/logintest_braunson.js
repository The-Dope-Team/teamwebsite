import load_braunson_url from 'utils/load_braunson_url.mjs';
import assert from assert

it ("Tests Braunson URL Endpoint", async()=>{
    const loginToken = await load_braunson_url();
    console.log("URL Response:")+Urlresponse;
    assert.equal(Urlresponse, "Hey Braunson, How is life?");

})