export async function api(url, init) {
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    ...(init || {})
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
