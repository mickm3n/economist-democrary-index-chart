import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DemocracyIndexChart = () => {
  // 從表格中提取的數據，按年份排序
  const data = [
    { year: 2006, "Western Europe": 8.60, "North America": 8.64, "Latin America and the Caribbean": 6.37, "Eastern Europe and Central Asia": 5.76, "Asia and Australasia": 5.44, "Sub-Saharan Africa": 4.24, "Middle East and North Africa": 3.54, "World": 5.52 },
    { year: 2008, "Western Europe": 8.61, "North America": 8.64, "Latin America and the Caribbean": 6.43, "Eastern Europe and Central Asia": 5.67, "Asia and Australasia": 5.58, "Sub-Saharan Africa": 4.28, "Middle East and North Africa": 3.48, "World": 5.55 },
    { year: 2010, "Western Europe": 8.45, "North America": 8.63, "Latin America and the Caribbean": 6.37, "Eastern Europe and Central Asia": 5.55, "Asia and Australasia": 5.53, "Sub-Saharan Africa": 4.23, "Middle East and North Africa": 3.52, "World": 5.46 },
    { year: 2011, "Western Europe": 8.40, "North America": 8.59, "Latin America and the Caribbean": 6.35, "Eastern Europe and Central Asia": 5.50, "Asia and Australasia": 5.51, "Sub-Saharan Africa": 4.32, "Middle East and North Africa": 3.62, "World": 5.49 },
    { year: 2012, "Western Europe": 8.44, "North America": 8.59, "Latin America and the Caribbean": 6.36, "Eastern Europe and Central Asia": 5.51, "Asia and Australasia": 5.56, "Sub-Saharan Africa": 4.33, "Middle East and North Africa": 3.73, "World": 5.52 },
    { year: 2013, "Western Europe": 8.41, "North America": 8.59, "Latin America and the Caribbean": 6.38, "Eastern Europe and Central Asia": 5.53, "Asia and Australasia": 5.61, "Sub-Saharan Africa": 4.36, "Middle East and North Africa": 3.68, "World": 5.53 },
    { year: 2014, "Western Europe": 8.41, "North America": 8.59, "Latin America and the Caribbean": 6.36, "Eastern Europe and Central Asia": 5.58, "Asia and Australasia": 5.70, "Sub-Saharan Africa": 4.34, "Middle East and North Africa": 3.65, "World": 5.55 },
    { year: 2015, "Western Europe": 8.42, "North America": 8.56, "Latin America and the Caribbean": 6.37, "Eastern Europe and Central Asia": 5.55, "Asia and Australasia": 5.74, "Sub-Saharan Africa": 4.38, "Middle East and North Africa": 3.58, "World": 5.55 },
    { year: 2016, "Western Europe": 8.40, "North America": 8.56, "Latin America and the Caribbean": 6.33, "Eastern Europe and Central Asia": 5.43, "Asia and Australasia": 5.74, "Sub-Saharan Africa": 4.37, "Middle East and North Africa": 3.56, "World": 5.52 },
    { year: 2017, "Western Europe": 8.38, "North America": 8.56, "Latin America and the Caribbean": 6.26, "Eastern Europe and Central Asia": 5.40, "Asia and Australasia": 5.63, "Sub-Saharan Africa": 4.35, "Middle East and North Africa": 3.54, "World": 5.48 },
    { year: 2018, "Western Europe": 8.35, "North America": 8.56, "Latin America and the Caribbean": 6.24, "Eastern Europe and Central Asia": 5.42, "Asia and Australasia": 5.67, "Sub-Saharan Africa": 4.36, "Middle East and North Africa": 3.54, "World": 5.48 },
    { year: 2019, "Western Europe": 8.35, "North America": 8.59, "Latin America and the Caribbean": 6.13, "Eastern Europe and Central Asia": 5.42, "Asia and Australasia": 5.67, "Sub-Saharan Africa": 4.26, "Middle East and North Africa": 3.53, "World": 5.44 },
    { year: 2020, "Western Europe": 8.29, "North America": 8.58, "Latin America and the Caribbean": 6.09, "Eastern Europe and Central Asia": 5.36, "Asia and Australasia": 5.67, "Sub-Saharan Africa": 4.16, "Middle East and North Africa": 3.44, "World": 5.37 },
    { year: 2021, "Western Europe": 8.23, "North America": 8.36, "Latin America and the Caribbean": 5.83, "Eastern Europe and Central Asia": 5.36, "Asia and Australasia": 5.62, "Sub-Saharan Africa": 4.12, "Middle East and North Africa": 3.41, "World": 5.28 },
    { year: 2022, "Western Europe": 8.36, "North America": 8.37, "Latin America and the Caribbean": 5.79, "Eastern Europe and Central Asia": 5.39, "Asia and Australasia": 5.46, "Sub-Saharan Africa": 4.14, "Middle East and North Africa": 3.34, "World": 5.29 },
    { year: 2023, "Western Europe": 8.37, "North America": 8.27, "Latin America and the Caribbean": 5.68, "Eastern Europe and Central Asia": 5.37, "Asia and Australasia": 5.41, "Sub-Saharan Africa": 4.04, "Middle East and North Africa": 3.23, "World": 5.23 },
    { year: 2024, "Western Europe": 8.38, "North America": 8.27, "Latin America and the Caribbean": 5.61, "Eastern Europe and Central Asia": 5.35, "Asia and Australasia": 5.31, "Sub-Saharan Africa": 4.00, "Middle East and North Africa": 3.12, "World": 5.17 }
  ];

  // 改良的顏色映射，提高對比度
  const colorMap = {
    "Western Europe": "#3366cc",
    "North America": "#0000ff",
    "Latin America and the Caribbean": "#00ccff",
    "Eastern Europe and Central Asia": "#ff9900", // 改為橙色
    "Asia and Australasia": "#009933", // 改為綠色
    "Sub-Saharan Africa": "#cc6600",
    "Middle East and North Africa": "#990000",
    "World": "#000000"
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">The Economist Democracy Index (2006-2024)</h2>

      {/* 第一個圖表：顯示所有地區，調整 Y 軸 */}
      <div className="h-96 mb-8">
        <h3 className="text-lg font-semibold mb-2 text-center">所有地區趨勢</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis domain={[2, 9]} ticks={[2, 3, 4, 5, 6, 7, 8, 9]} />
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: "20px" }} />
            <Line
              type="monotone"
              dataKey="Western Europe"
              stroke={colorMap["Western Europe"]}
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="North America"
              stroke={colorMap["North America"]}
              strokeWidth={2}
              activeDot={{ r: 8 }}
              strokeDasharray="5 5"
            />
            <Line type="monotone" dataKey="Latin America and the Caribbean" stroke={colorMap["Latin America and the Caribbean"]} />
            <Line type="monotone" dataKey="Eastern Europe and Central Asia" stroke={colorMap["Eastern Europe and Central Asia"]} />
            <Line type="monotone" dataKey="Asia and Australasia" stroke={colorMap["Asia and Australasia"]} strokeDasharray="3 3" />
            <Line type="monotone" dataKey="Sub-Saharan Africa" stroke={colorMap["Sub-Saharan Africa"]} />
            <Line type="monotone" dataKey="Middle East and North Africa" stroke={colorMap["Middle East and North Africa"]} />
            <Line type="monotone" dataKey="World" stroke={colorMap["World"]} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 第二個圖表：分組顯示，進一步突出變化 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="h-64">
          <h3 className="text-lg font-semibold mb-2 text-center">高民主指數地區</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis domain={[8, 8.7]} ticks={[8, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7]} />
              <Tooltip />
              <Legend layout="horizontal" verticalAlign="top" align="center" />
              <Line
                type="monotone"
                dataKey="Western Europe"
                stroke={colorMap["Western Europe"]}
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="North America"
                stroke={colorMap["North America"]}
                strokeWidth={2}
                activeDot={{ r: 8 }}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="h-64">
          <h3 className="text-lg font-semibold mb-2 text-center">中民主指數地區</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis domain={[5, 6.7]} ticks={[5, 5.2, 5.4, 5.6, 5.8, 6, 6.2, 6.4, 6.6]} />
              <Tooltip />
              <Legend layout="horizontal" verticalAlign="top" align="center" />
              <Line type="monotone" dataKey="Latin America and the Caribbean" stroke={colorMap["Latin America and the Caribbean"]} />
              <Line type="monotone" dataKey="Eastern Europe and Central Asia" stroke={colorMap["Eastern Europe and Central Asia"]} />
              <Line type="monotone" dataKey="Asia and Australasia" stroke={colorMap["Asia and Australasia"]} strokeDasharray="3 3" />
              <Line type="monotone" dataKey="World" stroke={colorMap["World"]} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="h-64 md:col-span-2">
          <h3 className="text-lg font-semibold mb-2 text-center">低民主指數地區</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis domain={[3, 4.5]} ticks={[3, 3.2, 3.4, 3.6, 3.8, 4, 4.2, 4.4]} />
              <Tooltip />
              <Legend layout="horizontal" verticalAlign="top" align="center" />
              <Line type="monotone" dataKey="Sub-Saharan Africa" stroke={colorMap["Sub-Saharan Africa"]} />
              <Line type="monotone" dataKey="Middle East and North Africa" stroke={colorMap["Middle East and North Africa"]} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600 text-center">
        數據來源：The Economist Democracy Index (2006-2024)
      </div>
    </div>
  );
};

export default DemocracyIndexChart;
