import fetch from 'node-fetch';

const loadloganurl = async () =>{

    const options = {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
    }

    const apiResponse = await fetch('34.66.168.202/logan', options);
    const testResponse = await apiResponse.text();
    // console.log('LoginToken: '+loginResponse)
    return testResponse;
}

export default loadloganurl;