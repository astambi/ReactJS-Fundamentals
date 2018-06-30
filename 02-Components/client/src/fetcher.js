const BaseUrl = "http://localhost:9999"; // server

export default {
    get: (endpoint, callback) =>
        fetch(BaseUrl + endpoint)
            .then(data => data.json())
            .then(callback)
            .catch(console.log)
};
