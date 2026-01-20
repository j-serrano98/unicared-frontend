"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from "recharts";

export default function Charts( { teacherData }) {

    const chartConfig = {
      rating: {
        label: "rating",
        color: "var(--chart-1)",
      }
    }

  return (
    <div className="relative w-full py-6 px-2 rounded-base">
      <div style={{ width: "100%", height: "250px" }}>
        <ResponsiveContainer>
          <RadarChart
            data={teacherData.skill_rating}
            outerRadius="80%"
            margin={{ top: 10, left: 10, right: 10, bottom: 10 }}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="skill" />
            <PolarRadiusAxis domain={[0, 10]} />
            {/* <Tooltip content={CustomTooltip} defaultIndex={2} active /> */}
            <Tooltip cursor={false} />
            {/* <ChartTooltip cursor={false} content={<ChartTooltipContent />} /> */}
            <Radar
              dataKey="score"
              stroke="#4e1f22ff"
              fill="#870e0eff"
              fillOpacity={0.8}
              animationBegin={500}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
