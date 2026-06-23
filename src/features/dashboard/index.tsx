/** @format */

import { useAuth } from "../../providers/auth-provider";

const Dashboard = () => {
  const auth = useAuth();

  console.log(auth);

  return <div>Dashboard</div>;
};

export default Dashboard;
