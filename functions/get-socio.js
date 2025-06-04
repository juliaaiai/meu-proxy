export async function handler(event, context) {
  const numero = event.queryStringParameters.n || "0000";

  const url = `https://script.google.com/macros/s/AKfycbwDxdFyEaGwpHYGwN7IBze0Sxz1CTuNjhtyu4zwR9_Ig6Hd-w6TBK0qtRF7dMLXeG7o/exec?n=${numero}`;

  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dados),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ erro: "Erro no proxy: " + e.message }),
    };
  }
}
