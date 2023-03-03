
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

    console.log(response);

}

export default authToken;