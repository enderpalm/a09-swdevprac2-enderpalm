export default async function getUserProfile(token: string) {
  return await fetch(
    "https://a08-venue-explorer-backend.vercel.app/api/v1/auth/me",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}
