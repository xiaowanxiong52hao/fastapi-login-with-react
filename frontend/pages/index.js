import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import axios from "axios";
import React from "react";
import { useAppContext } from "../context/Context";
import { useRouter } from "next/router";

function App() {
  const [, setData] = React.useState();
  const [url] = useAppContext();
  const router = useRouter();
  const getData = () => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };
  useEffect(getData, []);
  return (
    <>
      <h1>hello</h1>
      <button onClick={() => {
        router.push('/login')
      }}>login</button>
    </>
  );
}

export default App;
