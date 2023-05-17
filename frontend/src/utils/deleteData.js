export const deleteData = async url => {
  await fetch(url, {
    method: 'DELETE',
  });
  console.log('Card deleted');
};
