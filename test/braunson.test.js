import loadbraunsonurl from '../utils/loadbraunsonurl.mjs';
import assert from assert

it ("Tests Braunson URL Endpoint", async ()=>{
    const urlResponse = await loadbraunsonurl();
    console.log("URL Response: ")+urlResponse;
    assert.equal(urlResponse, "Hello Braunson");

});