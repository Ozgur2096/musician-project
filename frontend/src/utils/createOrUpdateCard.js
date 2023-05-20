export async function createOrUpdateCard(url, updatedData, method) {
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  };
  try {
    const response = await fetch(url, options);
    return response;
  } catch (e) {
    console.error(e);
  }
}
