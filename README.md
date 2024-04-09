# Protect your API with X-API-Key

## How to install

1. install serverless framework:

`npm install -g serverless`

2. set up your AWS credentials:

`serverless config credentials --provider aws --key YOUR_ACCESS_KEY --secret YOUR_SECRET_KEY`

3. deploy the service:

`serverless deploy`

4. test the service

`curl --location 'https://YOUR_DOMAIN.execute-api.us-east-1.amazonaws.com/stg/test-method' \
--header 'X-API-Key: YR7bhB95K7PRIf8eJ8ccIiP1oOOUX74TAf6iT4TYO3gUvsVHfl'`