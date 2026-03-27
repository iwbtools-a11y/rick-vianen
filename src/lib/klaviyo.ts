export async function subscribeToNewsletter(
  email: string,
  firstName?: string
) {
  const response = await fetch("/api/klaviyo/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, firstName }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error || "Failed to subscribe");
  }

  return response.json();
}
