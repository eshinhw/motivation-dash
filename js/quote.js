let category = "inspirational";

const quoteDiv = document.querySelector("#quote");

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
  const quote = data[0]["quote"];
  const author = data[0]["author"];
  const periodIndex = quote.indexOf(".") + 1;
  const textSpan = document.createElement("span");
  textSpan.innerText = `"${quote.slice(0, periodIndex)}" - ${author}`;
  // const authorSpan = document.createElement("span");
  // authorSpan.innerText = ``;
  quoteDiv.appendChild(textSpan);
}

getQuotes();
