import { useEffect } from "react";
import axios from "axios";
import useStore from "../../stores/apiStore";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ChartComponent = () => {
  const { data, setData } = useStore();

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "30d",
      },
      headers: {
        "X-RapidAPI-Key": "b9177390b4msh089a3a1fae035d9p126005jsn0d51136db967",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const formattedData = response.data.data.history.map((item) => ({
        timestamp: item.timestamp,
        price: item.price,
      }));
      setData(formattedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>History</h1>
      <BarChart width={800} height={400} data={data}>
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ChartComponent;
