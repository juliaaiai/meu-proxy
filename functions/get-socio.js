export async function handler(event, context) {
  const numero = event.queryStringParameters.n || "0000";

  const url = `https://script.google.com/macros/s/AKfycbzOAUeMVVhEo8EKf_19HJjlea0148rwetwKKcWWxR6M5AwW_e7bMkSdnNhHheIWxuXozw/exec?n=${numero}`;

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
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        erro: "Erro no proxy: " + e.message
      }),
    };
  }
}
