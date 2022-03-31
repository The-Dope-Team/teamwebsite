import fetch from "node-fetch";

const loadbraunsonurl = async () =>{

const options = {
        method:'GET',
        headers: {'Content-Type': 'application/json'}
    };

    const apiResponse = await fetch('http://34.68.158.225/braunson', options);
    const testResponse = apiResponse.text();

    return testResponse
};

export default loadbraunsonurl;