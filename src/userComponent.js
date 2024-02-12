import React, { useEffect, useState } from "react";

const TeamComponent = () => {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    // const url = "https://jsonplaceholder.typicode.com/users";
    const url = "http://172.210.18.220:3000/team904";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setTeamData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Team Data</h1>
      {teamData ? (
        <pre>{JSON.stringify(teamData, null, 2)}</pre>
      ) : (
        <p>Loading team data...</p>
      )}
    </div>
  );
};

export default TeamComponent;
