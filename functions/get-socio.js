export async function handler(event, context) {
  const numero = event.queryStringParameters.n || "0000";

  const url = `https://script.google.com/macros/s/AKfycbzbmvyo1RTxw6MIGvLqpTCVGZC8SN-j0WF04vPKDgpQ3Oq6jwgcZR78rkGhCitIvF7/exec?n=${numero}`;

  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // ✅ resolve CORS
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
