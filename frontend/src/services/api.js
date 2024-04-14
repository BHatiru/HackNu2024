async function fetchQuestionsForLevel(level) {
  const response = await fetch(
    `https://hacknu24.onrender.com/reading/${level}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch questions");
  }
  return await response.json();
}
