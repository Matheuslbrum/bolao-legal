import axios from "axios";

import Form from "./components/Form";
import Header from "./components/Header";
import Resume from "./components/Resume";
import { useEffect, useState } from "react";

function App() {
  const [admData, setAdmData] = useState([]);
  const [scoreData, setScoreData] = useState([]);
  const [userData, setUserData] = useState([]);

  const fetchUsersData = async () => {
    try {
      const response = await axios.get("https://expressjs-server-production-085c.up.railway.app/user");
      if(response.data.length > 0){
        setUserData(response.data)
      }
    } catch (error) {
      console.error('error', error);
    }
  };

  const fetchAdmData = async () => {
    try {
      const response = await axios.get("https://expressjs-server-production-085c.up.railway.app/adm");
      setAdmData(response.data)
    } catch (error) {
      console.error('error', error);
    }
  };

  const fetchScoreData = async () => {
    try {
      const response = await axios.get("https://expressjs-server-production-085c.up.railway.app/score");
      setScoreData(response.data)
    } catch (error) {
      console.error('error', error);
    }
  };

  useEffect(() => {
      fetchAdmData();
      fetchUsersData();
      fetchScoreData();
  }, []);

  return (
    <>
      <Header />
      <Resume userApiData={userData} admApiData={admData} />
      <Form userData={userData} admData={admData} scoreData={scoreData} />
    </>
  );
}

export default App;