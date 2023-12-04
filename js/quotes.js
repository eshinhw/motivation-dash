let category = "happiness";

async function getQuotes() {
  const res = await fetch(
    `https://api.api-ninjas.com/v1/quotes?category=${category}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": "ZS7b6pFpwyYdAc9iVAVsqA==CbhRdBCsNb94Udqo",
      },
    }
  );
  const data = await res.json();
  console.log(data);
}

getQuotes();
