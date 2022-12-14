import { useAppContext, AppProvider } from "../../context/Context";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function () {
  const [pair, setPair] = useState({ username: "", password: "" });
  const [url, ,setToken] = useAppContext();
  const router = useRouter();
  return (
    <AppProvider>
      <div>
        <label>
          <input type="text" onChange={(e) => {
            setPair(prev => {
              return { ...prev, username: e.target.value }
            })
          }}></input>
          username
        </label>
        <br />
        <label>
          <input type="password" onChange={(e) => {
            setPair(prev => {
              return { ...prev, password: e.target.value }
            })
          }}></input>
          password
        </label>
        <button onClick={
          async (e) => {
            const myRequest = {
              url: `${url}/api/token` ,
              method: "post",
              data: {...pair},
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                accept: 'application/json'
              }
            };
            axios(myRequest).then((res) => {
              setToken(res.data.access_token)
              router.push('/data')
            })
          }
        }>login</button>
      </div>
    </AppProvider>
  );
}
