import fetch from 'node-fetch';

const loadtoddurl = async () => {

    const options = {
        method : 'GET',
        headers : {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('http://localhost:3000/todd', options);
    const testResponse = await apiResponse.text();

    return testResponse;
}

export default loadtoddurl;