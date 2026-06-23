/** @format */

import { useAuth } from "../../store/AuthStore";

const Dashboard = () => {
  const auth = useAuth();

  console.log(auth);

  return <div>Dashboard</div>;
};

export default Dashboard;
