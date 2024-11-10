// pages/ssr.js
export async function getServerSideProps() {
     try {
       const res = await fetch('https://api.publicapis.org/entries');
       if (!res.ok) throw new Error('Failed to fetch data');
       const data = await res.json();
       return { props: { data } };
     } catch (error) {
       return { props: { data: null, error: 'Failed to fetch data' } };
     }
   }
   
   const SSRPage = ({ data, error }) => {
     if (error) {
       return <div>{error}</div>;
     }
     return <pre>{JSON.stringify(data, null, 2)}</pre>;
   };
   
   export default SSRPage;
   