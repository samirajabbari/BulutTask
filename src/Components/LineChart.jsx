import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";

import { chartData } from "../services/Service";
import styles from "./Styles/LineChart.module.css";

function LineCharter() {
  const formatvalue = (value) => {
    return `${value / 1000}K`;
  };
  const formatTooltip = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div
          className="custom-tooltip"
          style={{
            width: "fit-content",
            height: "fit-content",
            padding: "0.3rem",
            backgroundColor: "#f4ebff",
            borderRadius: "24px",
            fontSize: "14px",
            padding: "7px",
          }}
        >
          <p>{`Deposit: ${payload[0].value}$`}</p>
          <p>{`Whitdrawal: ${payload[1].value}$`}</p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className={styles.chartBox}>
      <div>
        <p className={styles.chartlabel}>Revenue</p>
        <LineChart
          width={630}
          height={270}
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" fontSize={"12px"} padding={{ top: 10 }} />
          <YAxis tickFormatter={formatvalue} fontSize={"12px"} />
          <Tooltip content={formatTooltip} />
          <Legend align="left" verticalAlign="bottom" height={36} />
          <Line
            type="monotone"
            dataKey="Diposit"
            stroke="#6941c6"
            fill="#6941c6"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Whitdrawal"
            stroke="#101828"
            fill="#101828"
            strokeWidth={2}
          />
        </LineChart>
      </div>
    </div>
  );
}

export default LineCharter;
