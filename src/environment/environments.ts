export const environment = {
  url : "",
  keySaveToken : "TOKEN_SERVER"
}

export async function getConfig() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return await response.json();
  } catch (error) {
    return error;
  }
}
