import React, { useState, useEffect } from "react";
import WidgetCards from "../../components/WidgetCards";
import axios from "../../utilities/axios";
import HostUrl from "../../utilities/HostUrl";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    getDashboardData();
  }, []);

  const getDashboardData = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: HostUrl + "/dashboard/home",
      });
      setDashboardData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return <>{dashboardData && <WidgetCards dashboardData={dashboardData} />}</>;
};

export default Dashboard;
