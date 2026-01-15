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

const data = [
  { subject: "Math", A: 120, B: 110, fullMark: 150 },
  { subject: "Chinese", A: 98, B: 130, fullMark: 150 },
  { subject: "English", A: 86, B: 130, fullMark: 150 },
  { subject: "Geography", A: 99, B: 100, fullMark: 150 },
  { subject: "Physics", A: 85, B: 90, fullMark: 150 },
  { subject: "History", A: 65, B: 85, fullMark: 150 },
];

export default function Charts( { teacherData }) {

    // Unify all skills from all reviews
    const skills = teacherData.reviews.flatMap(review => review.skills);

    // Group ratings by skill
    const groupedSkills = skills.reduce((acc, item) => {
      if (!acc[item.skill]) {
        acc[item.skill] = [];
      }
      acc[item.skill].push(item.score)
      return acc;
    }, {});

    // Get average by skill
    const skillsAverages = Object.entries(groupedSkills).map(([skill, scores]) => ({
      skill,
      rating: scores.reduce((a, b) => a + b, 0) / scores.length
    }));

    const chartConfig = {
      rating: {
        label: "rating",
        color: "var(--chart-1)",
      }
    }

  return (
    <div className="relative w-full p-6 rounded-base">
      <div style={{ width: "100%", height: "250px" }}>
        <ResponsiveContainer>
          <RadarChart
            data={skillsAverages}
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
              dataKey="rating"
              stroke="#1f2e4e"
              fill="#2e4574"
              fillOpacity={0.8}
              animationBegin={500}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
