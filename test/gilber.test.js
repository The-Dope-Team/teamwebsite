import loadgilberurl from '../utils/loadgilberurl.mjs';
import assert from 'assert';

it ("Tests Gilber URL Endpoint", async ()=>{
    const urlResponse = await loadgilberurl();
    console.log("URL Response: ")+urlResponse;
    assert.equal(urlResponse, "Hello Gilber");

});