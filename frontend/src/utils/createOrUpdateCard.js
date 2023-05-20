export async function createOrUpdateCard(url, data, method) {
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(url, options);
    return response;
  } catch (e) {
    console.error(e);
  }
}
