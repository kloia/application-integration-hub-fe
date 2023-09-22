import CompanyList from "../../components/company-list";
import ListFilter from "../../components/list-filter";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dash">
      <div className="box box2">
        <ListFilter />
        <CompanyList />
      </div>
    </div>
  );
};

export default Dashboard;
