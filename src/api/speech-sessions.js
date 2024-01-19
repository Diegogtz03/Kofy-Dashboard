export async function getSpeechSession(accessId) {
  var myFormData = new FormData();
  myFormData.append("accessId", accessId);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/getSummary`, {
    method: "POST",
    body: myFormData,
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
    data: data.current_text,
    message: 'Sesión iniciada correctamente'
  };
}