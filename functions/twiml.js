exports.handler = async function(event, context) {
  const path = event.path.split('/');
  const dynamicValue = path[path.length - 1];

  const xmlResponse = `
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
      <Say>The dynamic value is ${dynamicValue}</Say>
    </Response>
  `;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/xml'
    },
    body: xmlResponse
  };
};