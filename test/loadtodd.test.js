import assert from 'assert';
import loadtoddurl from '../utils/loadtoddurl.mjs';

it("Tests Todd URL endpoint", async ()=>{

    const urlResponse= await loadtoddurl();
    console.log("URL Response: ") + urlResponse;
    assert.equal(urlResponse, "Hello Todd");
})