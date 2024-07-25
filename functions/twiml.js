exports.handler = async function(event, context) {
  const path = event.path.split('/');
  const encodedValue = path[path.length - 1];
  const dynamicValue = decodeURIComponent(encodedValue);
  console.log(`Received request at ${event.path}`)

  const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
    <Response>
      <Say>
        <speak-as interpret-as="telephone">
          The caller ${dynamicValue}  has called the On-call team for a problem. 
          A SMS was sent to you to confirm you're calling the person back. 
          The message contains the caller's number.
          Thanks.
        </speak-as>
      </Say>
    </Response>`;

  console.log(`Replying with ${xmlResponse}`)
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/xml'
    },
    body: xmlResponse
  };
};