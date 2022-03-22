/* global Chart, axios */

let tally = [];
let labels = [];
for (let index = 0; index <= 50; index++) {
  labels.push(`Ward ${index}`);
}

axios
  .get("https://data.cityofchicago.org/resource/hec5-y4x5.json")
  .then(function (response) {
    // handle success
    //console.log(response.data);
    for (let removalRequest of response.data) {
      let wardNumber = removalRequest.ward;
      if (tally[wardNumber]) {
        tally[wardNumber]++;
      } else {
        tally[wardNumber] = 1;
      }
    }
    console.log(tally);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "# of Requests",
        data: tally,
        backgroundColor: "rgba(12, 80, 169, 0.7)",
        //   "rgba(255, 99, 132, 0.2)",
        //   "rgba(54, 162, 235, 0.2)",
        //   "rgba(255, 206, 86, 0.2)",
        //   "rgba(75, 192, 192, 0.2)",
        //   "rgba(153, 102, 255, 0.2)",
        //   "rgba(255, 159, 64, 0.2)",
        // ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
