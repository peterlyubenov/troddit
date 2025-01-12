import Head from "next/head";
import Feed from "../components/Feed";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import React from "react";
import { useTAuth } from "../PremiumAuthContext";

const IndexPage = ({ postData, user }) => {
  const { isLoaded, premium } = useTAuth();
  const [initialData, setInitialData] = useState({});
  const [ready, setReady] = useState(false);
  const data = useSession();
  const isloading = data.status === "loading";
  useEffect(() => {
    if (!isloading && isLoaded && premium) {
      const parseCookie = (str: string) =>
        str
          .split(";")
          .map((v) => v.split("="))
          .reduce((acc, v) => {
            acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(
              v[1].trim(),
            );
            return acc;
          }, {});
      const cookies = parseCookie(document.cookie);
      // can't use initial SSR props if login mismatch or local subs changed
      if (
        user !== (data?.data?.user?.name ?? "") ||
        (cookies?.["localSubs"] && cookies?.["localSubs"] !== "false")
      ) {
        setInitialData({});
      } else if (postData) {
        setInitialData(JSON.parse(postData));
      }
      setReady(true);
    }
    return () => {
      setReady(false);
    };
  }, [postData, isloading, isLoaded, premium, user, data?.data?.user?.name]);
  return (
    <div className="overflow-x-hidden ">
      <Head>
        <title>troddit · a web app for Reddit </title>
        <meta
          name="description"
          content="Browse Reddit better with Troddit. Grid views, single column mode, galleries, and a number of post styles. Login with Reddit to see your own subs, vote, and comment. Open source."
        ></meta>
      </Head>
      <main>{ready && <Feed initialData={initialData} />}</main>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      user: "",
    },
  };
}

export default IndexPage;
