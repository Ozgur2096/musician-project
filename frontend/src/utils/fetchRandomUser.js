export async function fetchRandomUser() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const avatarUrl = data.results[0].picture.large;
    return avatarUrl;
  } catch (error) {
    console.error('Error fetching random user:', error);
  }
}
