import "../styles/globals.css";
import ApolloSetting from "../src/commons/apollo";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "antd/dist/antd.css";
import { RecoilRoot } from "recoil";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd-JepLctIhKkk3z27_-LbEEFFVqLFRrI",
  authDomain: "fe-zeze.firebaseapp.com",
  projectId: "fe-zeze",
  storageBucket: "fe-zeze.appspot.com",
  messagingSenderId: "424449342894",
  appId: "1:424449342894:web:231fca23326cb786c49c3f",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
