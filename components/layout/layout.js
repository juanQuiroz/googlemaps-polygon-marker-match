/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';
import styles from './layout.module.css';

export default function Layout ({ children }) {
  return(
    <>
      <div className={styles.container}>
        <main>{children}</main>
      </div>
    </>
  )
}
