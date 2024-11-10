// pages/index.js
import DataCard from '../components/DataCard';

const HomePage = ({ data }) => (
  <div>
    <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
    {data.map((item) => (
      <DataCard key={item.id} title={item.name} description={item.description} />
    ))}
  </div>
);

export async function getServerSideProps() {
  try {
    const res = await fetch('https://api.publicapis.org/entries');
    const data = await res.json();
    return { props: { data: data.entries } };
  } catch (error) {
    return { props: { data: [], error: 'Failed to fetch data' } };
  }
}

export default HomePage;
