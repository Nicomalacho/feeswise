const ApiBuilder = require('claudia-api-builder');
const rp = require('request-promise');

const api = new ApiBuilder({ mergeVars: true });
module.exports = api;

api.get('/ping', () => ({
  message: 'Hello world',
}),
{
  success: { contentType: 'application/json' },
  error: { code: 404, contentType: 'application/json; charset=UTF-8' },
});

api.post('/fees', async (request) => {
  const { body } = request;
  const { TRANSFERWISE_API_KEY, TRANSFERWISE_URL } = request.env;
  const options = {
    uri: `${TRANSFERWISE_URL}/quotes`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TRANSFERWISE_API_KEY}`,
      'Content-type': 'application/json',
    },
    body,
    json: true,
  };
  try {
    const response = await rp(options);
    return response;
  } catch (e) {
    throw new ApiBuilder.ApiResponse(e, { 'Content-Type': 'application/json' }, 500);
  }
},
{
  success: { contentType: 'application/json' },
});

api.addPostDeployConfig('environment', 'Environment:', 'env');
