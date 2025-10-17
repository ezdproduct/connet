import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ type, data, options, id }) => {
    const chartRef = useRef(null);
    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = new Chart(chartRef.current, { type, data, options });
            return () => chartInstance.destroy();
        }
    }, [type, data, options]);
    return <canvas ref={chartRef} id={id}></canvas>;
};

export default ChartComponent;