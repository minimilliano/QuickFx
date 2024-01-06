// // import { useEffect, useState } from "react";

// // const hooks = (url) => {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     requestData();
// //   }, [url]);

// //   async function requestData() {
// //     setData([]);

// //     const res = await fetch(
// //       `https://restcountries.com/v3.1/all?fields=name,flag,currencies`
// //     );
// //     const json = await res.json();
// //     requestData(json.data);
// //   }

// //     return [data];
// // };
// // export default hooks;
// import { useState, useEffect } from "react";

// const localCache = {};

// const hooks = (country) => {
//   const [data, setData] = useState([]);
//   const [status, setStatus] = useState("unloaded");

//   useEffect(() => {
//     if (country) {
//       setData([]);
//     } else if (localCache[country]) {
//       setData(localCache[country]);
//     } else {
//       requestData();
//     }

//     async function requestData() {
//       setData([]);
//       setStatus("loading");

//       const res = await fetch(`https://restcountries.com/v3.1/name/{name}`);
//       const json = await res.json();
//       localCache[country] = json.data || [];
//       setData(localCache[country]);
//       setStatus("loaded");
//     }
//   }, [country]);

//   return [data, status];
// };
// export default hooks;
