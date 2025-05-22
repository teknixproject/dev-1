'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartWithDataTable() {
  const data = {
    labels: ['2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        label: 'Batch 1',
        data: [10, 40, 50, 20, 10, 50],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
      },
      {
        label: 'Batch 2',
        data: [30, 60, 70, 50, 40, 30],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Sample length (mm)',
          font: {
            size: 12,
            weight: 'bold',
          },
        },
        max: 80,
        ticks: {
          stepSize: 10,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Test number',
          font: {
            size: 12,
            weight: 'bold',
          },
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          boxWidth: 15,
          padding: 15,
          usePointStyle: false,
        },
      },
      title: {
        display: true,
        text: 'Chart with Data Table',
        font: {
          size: 18,
          weight: 'bold',
        },
      },
    },
  };

  const tableData = [
    { batch: 'Batch 1', values: [10, 40, 50, 20, 10, 50] },
    { batch: 'Batch 2', values: [30, 60, 70, 50, 40, 30] },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl">
        <div className="h-64 mb-6">
          <Bar data={data} options={options} />
        </div>
        <div className="mt-8">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 bg-gray-100 p-2"></th>
                {data.labels.map((label, index) => (
                  <th key={index} className="border border-gray-300 bg-gray-100 p-2 text-center">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2 font-medium bg-gray-50">
                    {row.batch}
                  </td>
                  {row.values.map((value, i) => (
                    <td key={i} className="border border-gray-300 p-2 text-center">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}