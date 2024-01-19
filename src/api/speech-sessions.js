import objectToUrlEncoded from "@/utils/encoder";

export async function getSpeechSession(accessId) {
  var form = {
    'accessId': accessId
  }

  var encodedData = objectToUrlEncoded(form)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/getSummary`, {
    method: "POST",
    body: encodedData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const data = JSON.parse(await res.text());

  if (res.status !== 200) {
    return {
      success: false,
      data: '',
      message: "Error, revise id de acceso"
    }
  }

  return {
    success: true,
    data: data.resultado,
    message: 'Sesión iniciada correctamente'
  };
}


export async function verifySpeechSession(accessId, sessionData) {
  var form = {
    'accessId': accessId,
    'session': JSON.stringify({ "resultado": sessionData })
  }

  var encodedData = objectToUrlEncoded(form)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/verifySummary`, {
    method: "POST",
    body: encodedData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const data = JSON.parse(await res.text());

  if (res.status !== 200) {
    return {
      success: false,
      message: "Error, intente nuevamente"
    }
  }

  return {
    success: true,
    message: 'Sesión verificada correctamente'
  };
}