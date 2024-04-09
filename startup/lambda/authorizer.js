const { API_KEY } = process.env;

module.exports.handler = async (event, context) => {

  const apiKey = event.headers?.['x-api-key']

    if (!apiKey) {
        return { isAuthorized: false };
    }

    return { isAuthorized: apiKey == API_KEY };

}

