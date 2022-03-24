import loadbraunsonurl from '../utils/load_braunson_url.mjs';
import assert from assert

it ("Tests Braunson URL Endpoint", async ()=>{
    const urlResponse = await loadbraunsonurl();
    console.log("URL Response: ")+urlResponse;
    assert.equal(urlResponse, "Hello Braunson");

});