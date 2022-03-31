import fetch from 'node-fetch';

const loadtoddurl = async () => {

    const options = {
        method : 'GET',
        headers : {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('http://35.202.100.4/todd', options);
    const testResponse = await apiResponse.text();

    return testResponse;
}

export default loadtoddurl;