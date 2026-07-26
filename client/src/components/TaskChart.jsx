import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const TaskChart = ({ tasks }) => {
  const pending = tasks.filter(
    (t) => t.status === "Pending"
  ).length;

  const progress = tasks.filter(
    (t) => t.status === "In Progress"
  ).length;

  const completed = tasks.filter(
    (t) => t.status === "Completed"
  ).length;

  const data = {
    labels: [
      "Pending",
      "In Progress",
      "Completed",
    ],
    datasets: [
      {
        label: "Tasks",
        data: [pending, progress, completed],
        backgroundColor: [
          "#fbbf24",
          "#3b82f6",
          "#22c55e",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "20px auto",
      }}
    >
      <Doughnut data={data} />
    </div>
  );
};

export default TaskChart;