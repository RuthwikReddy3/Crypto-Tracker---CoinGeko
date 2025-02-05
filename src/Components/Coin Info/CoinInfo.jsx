import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const CoinInfo = ({ historicData, days, setDays, currency, setInterval }) => {
    const chartDays = [
        { label: '24 Hours', value: 1 },
        { label: '7 Days', value: 7 },
        { label: '30 Days', value: 30 },
        { label: '90 Days', value: 90 },
        { label: '365 Days', value: 365 },
    ];

    // Handle day selection change
    useEffect(() => {
        if (days === 1) {
            setInterval('');
        } else {
            setInterval('daily');
        }
    }, [days, setInterval]);

    const HandleDayChange = (e) => {
        const daysSelected = Number(e.target.value);
        setDays(daysSelected);
    };

    const data = {
        labels: historicData.prices.map((Coinprice) => {
            let date = new Date(Coinprice[0]);
            let time =
                date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
            // If it's 24 hours, return time; for other days, return date
            return days === 1 ? time : date.toLocaleDateString();
        }),
        datasets: [
            {
                label: `Price in ${currency.toUpperCase()}`,
                data: historicData.prices.map((Coinprice) => Coinprice[1]),
                borderColor: 'rgba(0, 122, 255, 1)', // Vibrant blue
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 6,
                hoverBackgroundColor: 'white',
                tension: 0.3, // Smooth curve effect
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // This allows custom width and height
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: `Price Trend for the Last ${days} ${days === 1 ? 'Day' : 'Days'}`,
                font: {
                    size: 18,
                    weight: 'bold',
                },
                color: '#333',
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleFont: { size: 14 },
                bodyFont: { size: 12 },
                padding: 10,
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#555',
                    autoSkip: true,
                    maxTicksLimit: 10,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                ticks: {
                    color: '#555',
                },
                grid: {
                    color: 'rgba(200, 200, 200, 0.3)',
                    drawBorder: false,
                },
            },
        },
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full p-6 mt-6 bg-white shadow-lg rounded-xl">
                <h2 className="mb-3 text-lg font-semibold text-gray-800">Coin Price Trend in {currency.toUpperCase()}</h2>
                <div style={{ width: '80%', height: '400px' }}> {/* Adjust the width and height here */}
                    <Line data={data} options={options} />
                </div>
            </div>
            <div className="flex justify-center w-full mt-5">
                <select
                    className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    onChange={HandleDayChange}
                    value={days}
                >
                    {chartDays.map((day, index) => (
                        <option key={index} value={day.value}>
                            {day.label}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default CoinInfo;
