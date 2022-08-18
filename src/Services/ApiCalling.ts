import axios from "axios";

async function getQuestions(
  amount: number,
  difficulty: string,
  category: number
) {
  const promise = axios({
    method: "get",
    url: "https://opentdb.com/api.php",

    params: {
      amount: amount,
      difficulty: difficulty,
      category: category,
    },
  });

  const data = promise.then(async (res) => await res.data["results"]);

  return data;
}

export default getQuestions;
