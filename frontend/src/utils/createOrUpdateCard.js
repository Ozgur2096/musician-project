export async function createOrUpdateCard(url, updatedData, method) {
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  };
  try {
    await fetch(url, options);
  } catch (e) {
    console.error(e);
  }
}
