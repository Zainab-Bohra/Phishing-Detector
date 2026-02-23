import axios from "axios";

export const scanURL = async (url) => {

  const res = await axios.post("/api/scan",{
    url
  });

  return res.data;

}