// components/DataCard.js
const DataCard = ({ title, description }) => (
     <div className="border p-4 shadow-md rounded-lg">
       <h3 className="text-lg font-bold">{title}</h3>
       <p>{description}</p>
     </div>
   );
   
   export default DataCard;
   