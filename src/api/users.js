export const loadUsers = async () => {
  try {
    const response = await fetch('./data.json');

    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
