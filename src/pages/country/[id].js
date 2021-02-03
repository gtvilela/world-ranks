import Layout from "../../components/Layout/Layout";
import styles from "./country.module.css";

const Country = ({ country }) => {
  return (
    <Layout title={country.name}>
      <div >
        <div className={styles.overview_panel}>
          <img src={country.flag} alt={country.name}></img>

          <h1 className={styles.overview_name}>{country.name}</h1>
          <div className={styles.overview_region}>{country.region}</div>

          <div className={styles.overview_number}>
            <div className={styles.overview_population}>
              <div className={styles.overview_value}>{country.population}</div>
              <div className={styles.overview_label}>Population</div>
            </div>
            <div className={styles.overview_area}>
              <div className={styles.overview_value}>{country.area}</div>
              <div className={styles.overview_label}>Area</div>
            </div>
          </div>
        </div>

        <div className={styles.details_panel}>
            <h4 className={styles.details_panel_heading}>Details</h4>
            <div>
                <div className={styles.details_panel_row}>Captial</div>
                <div>{country.captial}</div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default Country;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${params.id}`
  );
  const country = await res.json();

  return {
    props: {
      country,
    },
  };
};
