import React, { useState } from "react";
import { Link } from "react-router-dom";

const QueueFrequency = () => {
  const [arrivalData, setArrivalData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [queueLength, setQueueLength] = useState(0);
  const [waitingTimePercentage, setWaitingTimePercentage] = useState(0);

  const m = 17;
  const a = 3;
  const xo = 5;

  const generateRandomData = () => {
    const randomArrivalData = [];
    const randomServiceData = [];

    for (let i = 0; i < 10; i++) {
      const arrivalTime = (m * xo + a * i) % m;
      const serviceTime = (m * xo + a * (i + 1)) % m;

      randomArrivalData.push({
        time: arrivalTime,
        frequency: Math.floor(Math.random() * 10) + 1,
      });
      randomServiceData.push({
        time: serviceTime,
        frequency: Math.floor(Math.random() * 10) + 1,
      });
    }

    setArrivalData(randomArrivalData);
    setServiceData(randomServiceData);
  };

  const calculateQueueLength = () => {
    let length = 0;
    for (const item of arrivalData) {
      length += item.frequency;
    }
    return length;
  };

  const calculateWaitingTimePercentage = () => {
    let totalWaitingTime = 0;

    for (let i = 0; i < arrivalData.length; i++) {
      let cumulativeServiceTime = 0;
      for (let j = 0; j < i; j++) {
        cumulativeServiceTime += serviceData[j].frequency;
      }
      const waitingTime = cumulativeServiceTime - arrivalData[i].time;
      totalWaitingTime += waitingTime < 0 ? 0 : waitingTime;
    }

    const totalServiceTime = serviceData.reduce(
      (total, item) => total + item.frequency,
      0
    );

    const percentage = (totalWaitingTime / totalServiceTime) * 100;
    return percentage.toFixed(2);
  };

  const handleCalculate = () => {
    generateRandomData();
    const queueLen = calculateQueueLength();
    const waitingPercentage = calculateWaitingTimePercentage();

    setQueueLength(queueLen);
    setWaitingTimePercentage(waitingPercentage);
  };

  return (
    <div className="container">
      <Link to="/">Back to Home</Link>
      <h1>Queue Simulation</h1>
      <button onClick={handleCalculate}>Generate Random Data</button>

      {/* Display Arrival and Service Data Here */}
      <div>
        <h2>Arrival Data</h2>
        <ul>
          {arrivalData.map((item, index) => (
            <li key={index}>
              Time: {item.time.toFixed(2)}, Frequency: {item.frequency}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Service Data</h2>
        <ul>
          {serviceData.map((item, index) => (
            <li key={index}>
              Time: {item.time.toFixed(2)}, Frequency: {item.frequency}
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleCalculate}>Calculate</button>

      <p>Queue Length: {queueLength}</p>
      <p>Waiting Time Percentage: {waitingTimePercentage}%</p>
    </div>
  );
};

export default QueueFrequency;
