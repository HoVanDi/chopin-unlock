// chartData.js
export const labels = ["", "", ""];
export const data = {
  labels: labels,
  datasets: [
    {
      label: "F0, F1, F2",
      data: [0, 5, 30],
      backgroundColor: "#fff",
      borderColor: "#264F95",
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

export const config = {
  type: "line",
  data: data,
  options: {
    scales: {
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
              "F0 (rebate): 5%",
              "F1 (commission): 35%",
              "F2 (commission): 10%",
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
