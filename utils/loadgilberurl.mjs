import fetch from "node-fetch";

const loadgilberurl = async () =>{

const options = {
        method:'GET',
        headers: {'Content-Type': 'application/json'}
    };

    const apiResponse = await fetch('http://localhost:3000/gilber', options);
    const testResponse = apiResponse.text();

    return testResponse
};

export default loadgilberurl;