export default async function userLogIn(email: string, password: string) {
  const jsonBody = JSON.stringify({ email, password });
  return await fetch(
    "https://a08-venue-explorer-backend.vercel.app/api/v1/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonBody,
    }
  )
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}
