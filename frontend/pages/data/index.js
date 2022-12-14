import axios from "axios";
import { useState } from "react";
import { useAppContext } from "../../context/Context";
import { useRouter } from "next/router";

export default function () {
  const [state, setState] = useState("");
  const [url, token] = useAppContext();
  const router = useRouter();

  const myRequest = {
    method: "get",
    url: `${url}/api/data`,
    headers: {
      Authorization:
        `Bearer ${token}`,
    },
  }

  axios(myRequest).then((res) => {
    setState(res.data.hey);
  });
  return (
    <>
      <h2>{state}</h2>
      <button onClick={() => {
        router.push('/')
      }}>back</button>
    </>
  );
}
