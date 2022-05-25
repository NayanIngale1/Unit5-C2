import { useEffect, useState } from "react";
import "../App.css"

export const ShowStudents = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortKey, setSortKey] = useState("first_name");

  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:8080/students")
      .then((data) => data.json())
      .then((data) => {
        setAllData(data);
        // console.log(allData);
      });

    setLoading(false);

      console.log("fetches the data ");

  };

  const handleSort = async() => {
    console.log("sortKey:", sortKey);
    console.log("sortOrder:", sortOrder);

    if(sortKey == "first_name" || sortKey == "gender"){     
     
        sortOrder == "asc"
          ? setAllData(
              [...allData].sort((a, b) => {
                 if(a[sortKey] < b[sortKey]){
                   return 1 
                 }else if(a[sortKey] > b[sortKey]){
                   return -1 
                 }else{
                   return 0
                 }
              })
            )
          : setAllData(
              [...allData].sort((a, b) => {
               if(a[sortKey] > b[sortKey]){
                   return 1 
                 }else if(a[sortKey] < b[sortKey]){
                   return -1 
                 }else{
                   return 0
                 }
              })
          );
      
    }else{
      
        sortOrder == "asc"
          ? setAllData(
              [...allData].sort((a, b) => {
                return a[sortKey] - b[sortKey];
              })
            )
          : setAllData(
              [...allData].sort((a, b) => {
                return b[sortKey] - a[sortKey];
              })
          );
      
    }
    
  };

  console.log("alldata>>>>", allData);

  return loading ? (
    <div>loading....</div>
  ) : (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
            onChange={(e) => {
              setSortKey(e.target.value);
            }}
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
            onChange={(e) => {
              setSortOrder(e.target.value);
            }}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort" onClick={handleSort}>
          Sort
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {allData.map((d) => (
            <tr className="row" key={ d.id}>
              <td className="first_name">{d.first_name}</td>
              <td className="last_name">{d.last_name}</td>
              <td className="email">{d.email}</td>
              <td className="gender">{d.gender}</td>
              <td className="age">{d.age}</td>
              <td className="tenth_score">{d.tenth_score}</td>
              <td className="twelth_score">{d.twelth_score}</td>
              <td className="preferred_branch">{d.preferred_branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
