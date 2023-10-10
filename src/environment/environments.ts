export const environment = {
  url : "http://localhost:8090",
  keySaveToken : "TOKEN_SERVER",
  firebaseConfig : {
    apiKey: "AIzaSyBk7gs8EjXEiVROAY326uHKdFC6eLLNE8A",
    authDomain: "fir-project-ac36e.firebaseapp.com",
    projectId: "fir-project-ac36e",
    storageBucket: "fir-project-ac36e.appspot.com",
    messagingSenderId: "625100437167",
    appId: "1:625100437167:web:046a24919959220837c65a",
    measurementId: "G-LSFP62D2ZG"
  }
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
