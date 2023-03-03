
const authToken = async function(username, password){
    const baseUrl = process.env.baseUrl;
    const requestBody = JSON.stringify({
        "username": username,
        "password": password
    })
    const url = `${baseUrl}/auth-token/`
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: requestBody
    });

    const objectResponse = await response.json();

    //Add the token to the local storage.
    localStorage.setItem('token', objectResponse.token);

}

export default authToken;