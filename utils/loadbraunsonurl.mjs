import fetch from "node-fetch";

const load_braunson_url = async () =>{

const options = {
    method:'GET',
    headers: {'Content-Type': 'application/json'}
    };

    const apiResponse = await fetch('https://localhost:3000/braunson', options);
    const testResponse = apiResponse.text();

    return testResponse
};

export default loadbraunsonurl;