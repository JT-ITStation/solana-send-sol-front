import { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { AppBar } from '../components/AppBar'
import {ShowBalance} from '../components/ShowBalance'
import { SendSolForm } from '../components/SendSolForm'
import * as web3 from '@solana/web3.js'


const Home: NextPage = (props) => {


  return (
    <div className={styles.App}>
      <Head>
        <title>Wallet-Adapter Example</title>
        <meta
          name="description"
          content="Wallet-Adapter Example"
        />
      </Head>
      <AppBar />
      <div className={styles.AppBody}>
        <p>Display Balance Here</p>

        <ShowBalance />
        <SendSolForm />
      </div>
    </div>
  );
}

export default Home;