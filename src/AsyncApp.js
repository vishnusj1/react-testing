import { useState, useEffect } from "react";

function AsyncApp() {
  let [data, setData] = useState(null);
  async function somethingAsync() {
    // this time we use the await syntax
    let response = await fetch("/some/url");
    setData(response);
  }
  useEffect(() => {
    somethingAsync();
  }, []);
  return data;
}
export default AsyncApp;
