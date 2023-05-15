export async function updateFavorites(userId, favorites) {
  const url = `/users/favorites/${userId}`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ favorites }),
  };
  try {
    await fetch(url, options);
  } catch (e) {
    console.error(e);
  }
}
