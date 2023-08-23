import ChartComponent from "../../components/chartData/chartData";
import TopBox from "../../components/topBox/topBox";
import "./dashboard.scss";

const dashboard = () => {
  return (
    <div className="dash">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">Box2</div>
      <div className="box box3">Box3</div>
      <div className="box box4">
        <ChartComponent />
      </div>
    </div>
  );
};

export default dashboard;
