import React, { useEffect, useState } from "react";
import { FaTrophy } from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const AwardsStats = () => {
  const leetCodeUsername = "RagulPrasanth"; // Replace with your LeetCode username
  const githubUsername = "Ragulprasanth-26"; // GitHub username

  const codingStats = [
    { platform: "HackerRank", solved: 80, rank: "5⭐ Java", icon: <FaTrophy /> },
  ];

  const [leetStats, setLeetStats] = useState({
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
  });

  const [githubStats, setGithubStats] = useState([]);

  const COLORS = ["#facc15", "#60a5fa", "#f87171"]; // Easy, Medium, Hard

  // Fetch LeetCode stats
  useEffect(() => {
    const fetchLeetStats = async () => {
      try {
        const res = await fetch(
          `https://leetcode-stats-api.herokuapp.com/${leetCodeUsername}`
        );
        const data = await res.json();
        setLeetStats({
          easySolved: data.easySolved || 0,
          mediumSolved: data.mediumSolved || 0,
          hardSolved: data.hardSolved || 0,
        });
      } catch (err) {
        console.error("Error fetching LeetCode stats:", err);
      }
    };
    fetchLeetStats();
  }, []);

  // Fetch GitHub contributions last 30 days
  useEffect(() => {
    const fetchGithubContributions = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${githubUsername}/events/public`
        );
        const events = await res.json();

        const now = new Date();
        const last30Days = new Date();
        last30Days.setDate(now.getDate() - 30);

        const contributionsMap = {};

        events.forEach((event) => {
          if (event.type === "PushEvent" && new Date(event.created_at) >= last30Days) {
            const date = event.created_at.split("T")[0];
            contributionsMap[date] = (contributionsMap[date] || 0) + event.payload.commits.length;
          }
        });

        const chartData = [];
        for (let d = new Date(last30Days); d <= now; d.setDate(d.getDate() + 1)) {
          const dateStr = d.toISOString().split("T")[0];
          chartData.push({ date: dateStr.slice(5), contributions: contributionsMap[dateStr] || 0 });
        }

        setGithubStats(chartData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchGithubContributions();
  }, [githubUsername]);

  const leetChartData = [
    { name: "Easy", value: leetStats.easySolved },
    { name: "Medium", value: leetStats.mediumSolved },
    { name: "Hard", value: leetStats.hardSolved },
  ];

  return (
    <section className="bg-secondary py-16 px-6" id="awards-stats">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* LeetCode Pie Chart */}
        <div className="bg-black p-6 rounded-xl shadow-lg flex flex-col gap-6">
          {/* Title on top */}
          <h2 className="text-yellow-400 text-2xl font-bold text-center w-full">
            LeetCode Problem Stats
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Pie Chart */}
            <ResponsiveContainer width="50%" height={300}>
              <PieChart>
                <Pie
                  data={leetChartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                >
                  {leetChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "#111", border: "none", color: "white" }} />
              </PieChart>
            </ResponsiveContainer>

            {/* Values next to chart */}
            <div className="flex flex-col gap-4">
              {leetChartData.map((entry, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span
                    className="w-5 h-5 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></span>
                  <span className="text-white font-semibold">
                    {entry.name}: {entry.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* GitHub Bar Chart */}
        <div className="bg-black p-6 rounded-xl shadow-lg">
          <h2 className="text-yellow-400 text-2xl font-bold mb-6 text-center">
            GitHub Contributions (Last 30 Days)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={githubStats}>
              <XAxis dataKey="date" tick={{ fill: "white", fontSize: 12 }} />
              <YAxis tick={{ fill: "white", fontSize: 12 }} />
              <Tooltip contentStyle={{ backgroundColor: "#111", border: "none", color: "white" }} />
              <Legend />
              <Bar dataKey="contributions" fill="#facc15" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Other Coding Profiles */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10">
            Other Coding Profiles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {codingStats.map((item, i) => (
              <div
                key={i}
                className="bg-black text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300"
              >
                <div className="flex items-center gap-3 text-yellow-400 text-2xl mb-3">
                  {item.icon} <span>{item.platform}</span>
                </div>
                <p className="text-lg">Problems Solved: {item.solved}</p>
                <p className="text-gray-400">Rank: {item.rank}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AwardsStats;
