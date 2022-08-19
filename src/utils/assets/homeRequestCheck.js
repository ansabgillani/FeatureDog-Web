export default function check(requestPage, requestData) {
  if (requestPage) {
    requestData.requestData.map((request) => {
      request.requestPage = true;
    });
  } else {
    requestData.requestData.map((request) => {
      request.requestPage = false;
    });
  }
}
