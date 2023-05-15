export const fetchData = async (url, setData) => {
  const response = await fetch(url);
  const result = await response.json();
  setData(result);
};
