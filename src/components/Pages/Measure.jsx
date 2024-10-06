import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import '../../styles/Measure.css';

function Measure() {
  const webcamRef = useRef(null);
  const [points, setPoints] = useState([]);
  const [distance, setDistance] = useState(null);
  const [isMeasuring, setIsMeasuring] = useState(false); // State to manage measurement mode

  const videoConstraints = {
    facingMode: { exact: 'environment' }, // Use the back camera
  };

  const handleClick = () => {
    setIsMeasuring(true); // Start measuring mode
    setPoints([]); // Reset points
    setDistance(null); // Reset distance
  };

  const capturePoint = (event) => {
    if (!isMeasuring) return; // Only capture points if in measuring mode
    const rect = webcamRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left; // Calculate X position relative to the webcam
    const y = event.clientY - rect.top; // Calculate Y position relative to the webcam
    setPoints((prevPoints) => {
      if (prevPoints.length < 2) {
        return [...prevPoints, { x, y }];
      }
      return prevPoints; // Do not add more than 2 points
    });
  };

  useEffect(() => {
    if (points.length === 2) {
      const dist = calculateDistance(points[0], points[1]);
      setDistance(dist);
      setIsMeasuring(false); // End measuring mode after calculating distance
    }
  }, [points]);

  const calculateDistance = (point1, point2) => {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy).toFixed(2); // Euclidean distance
  };

  return (
    <div className="measure-container">
      <h1>Camera Measurement Tool</h1>
      <button onClick={handleClick} className="capture-btn">
        Start Measure
      </button>
      <div className="webcam-container" onClick={capturePoint}>
        <Webcam
          ref={webcamRef}
          audio={false}
          videoConstraints={videoConstraints}
          className="webcam-view"
        />
        {points.map((point, index) => (
          <div
            key={index}
            className="point-marker"
            style={{ left: point.x, top: point.y }}
          />
        ))}
      </div>
      {distance && (
        <div className="distance-display">
          <h2>Distance: {distance} pixels</h2>
        </div>
      )}
      {isMeasuring && <p>Select two points on the camera feed.</p>}
    </div>
  );
}

export default Measure;
