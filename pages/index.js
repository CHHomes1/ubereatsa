import Head from "next/head";
import Home from "../components/Home/Home";

const style = {
  wrapper: "",
};
export default function Main() {
  return (
    <div className={style.container}>
      <Head>
        <title>Uber Eats Website</title>
        <meta name="description" content="An website for ubereats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}
