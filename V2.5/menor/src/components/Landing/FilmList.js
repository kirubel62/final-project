import React from "react";
import "./Home.css";
//for data visualttion
import { Bar } from "react-chartjs-2";

import Chart, {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FilmList = (props) => {
  //console.log(props.films.year);
  //console.log(props.films.total);
  //<p>{props.films.year}</p>
  //<p>{props.films.total}</p>

  const data = {
    //labels: ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"],
    labels: ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "IDMC Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <>
      <p>{props.films.year}</p>
      <p>{props.films.total}</p>
      <div className="datavisualization">
        <Bar
          data={data}
          options={options}
          //height={100}
          // width = {100}
        ></Bar>
      </div>
    </>
  );
};

export default FilmList;
