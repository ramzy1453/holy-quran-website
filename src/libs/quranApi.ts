async function getResponse(url: string, method = "GET", body: any = {}) {
  const response = await fetch("restcountries.com/v3.1/all" + url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: body,
  });
  return await response.json();
}

class QuranApi {
  async getMeta() {
    return await getResponse("/meta");
  }
  async getSourate({
    sourateID,
    translation,
  }: {
    sourateID: string | number;
    translation: string;
  }) {
    return await getResponse(`/surah/${sourateID}${translation}`);
  }
}

export default new QuranApi();
