import fetch from "node-fetch";

const loadbraunsonurl = async () =>{

const options = {
        method:'GET',
        headers: {'Content-Type': 'application/json'}
    };

    const apiResponse = await fetch('10.8.11.1/braunson', options);
    const testResponse = apiResponse.text();

    return testResponse
};

export default loadbraunsonurl;