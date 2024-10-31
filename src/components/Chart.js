import {
  LineController,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart as ChartJS } from "chart.js";
import "./customTooltip.css";

// Register components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  LineController
);

export const labels = ["", "", ""];
export const data = {
  labels: labels,
  datasets: [
    {
      label: "F0, F1, F2",
      data: [
        { x: 0, y: 0 },
        { x: 2.25, y: 15},
        { x: 3, y: 30 },
      ],
      backgroundColor: "#fff",
      borderColor: "#264F95",
      borderWidth: 2,
      tension: 0.3,
      showLine: true,
    },
  ],
};

export const config = {
  type: "line",
  data: data,
  options: {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        ticks: {
          display: false, 
        },
      },
      y: {
        grid: {
          color: "#313856",
          lineWidth: 1,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // Disable the default tooltip
        external: function (context) {
          // Custom tooltip
          // Tooltip Element
          let tooltipEl = document.getElementById("chartjs-tooltip");

          // Create element on first render
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "chartjs-tooltip";
            tooltipEl.innerHTML = "<ul></ul>";
            document.body.appendChild(tooltipEl);
          }

          // Hide if no tooltip
          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }

          // Set Text
          if (tooltipModel.body) {
            const bodyLines = [
              "F0 (Rebate): 5%",
              "F1 (Commission): 35%",
              "F2 (Commission): 10%",
            ];

            const innerHtml = bodyLines
              .map(function (body) {
                return "<li>" + body + "</li>";
              })
              .join("");

            const ul = tooltipEl.querySelector("ul");
            ul.innerHTML = innerHtml;
          }

          // Display, position, and set styles for font
          const position = context.chart.canvas.getBoundingClientRect();
          tooltipEl.style.opacity = 1;
          tooltipEl.style.position = "absolute";
          tooltipEl.style.left =
            position.left + window.pageXOffset + tooltipModel.caretX + "px";
          tooltipEl.style.top =
            position.top + window.pageYOffset + tooltipModel.caretY + "px";
          tooltipEl.style.font = tooltipModel.options.bodyFont.string;
          tooltipEl.style.padding =
            tooltipModel.padding + "px " + tooltipModel.padding + "px";
        },
      },
    },
  },
};
