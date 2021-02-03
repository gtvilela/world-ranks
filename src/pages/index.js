import Layout from '../components/Layout/Layout'
import styles from '../../styles/Home.module.css'
import SearchInput from '../components/SearchInput/SearchInput'

export default function Home({countries}) {
  return <Layout>
    <div className={styles.counts}>Found {countries.length} countries</div>
  
    <SearchInput placeholder="Filter by Name, Region or SubRegion" />
  </Layout>
}

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await res.json();
  return {
    props: {
      countries,
    }
  }
}