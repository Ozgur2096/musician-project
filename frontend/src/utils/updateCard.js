// PATCH method

export async function updateCard(url, updatedData) {
  const options = {
    method: 'PATCH',
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
