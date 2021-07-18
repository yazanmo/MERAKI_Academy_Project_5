// const request = require("request");

// const addApi = (error, response, body) => {
//   let { query } = req.body;

//   if (error) return console.error("Request failed:", error);
//   else if (response.statusCode != 200)
//     return console.error("Error:", response.statusCode, body.toString("utf8"));
//   else console.log(body);
// };

// request.get(
//   {
//     url: "https://api.calorieninjas.com/v1/nutrition?query=" + query,
//     headers: {
//       "X-Api-Key": "BvLmBG+kd9BttcJLo+V3IQ==isUJUxgilC2yzusj",
//     },
//   },
//   function (error, response, body) {
//     if (error) return console.error("Request failed:", error);
//     else if (response.statusCode != 200)
//       return console.error(
//         "Error:",
//         response.statusCode,
//         body.toString("utf8")
//       );
//     else console.log(body);
//   }
// );
