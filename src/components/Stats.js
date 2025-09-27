import React, { useEffect, useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { AiOutlineGithub } from "react-icons/ai";

const AwardsStats = () => {
  const leetCodeUsername = "RagulPrasanth26";
  const githubUsername = "Ragulprasanth-26";

  // LeetCode Stats
  const [leetStats, setLeetStats] = useState({
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
  });
  const [leetLoading, setLeetLoading] = useState(true);

  // GitHub Stats
  const [githubStats, setGithubStats] = useState({ repos: 0, followers: 0 });
  const [githubLoading, setGithubLoading] = useState(true);

  const COLORS = ["#facc15", "#60a5fa", "#f87171"];

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
      } finally {
        setLeetLoading(false);
      }
    };
    fetchLeetStats();
  }, [leetCodeUsername]);

  // Fetch GitHub stats
  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${githubUsername}`);
        const data = await res.json();
        setGithubStats({
          repos: data.public_repos,
          followers: data.followers,
        });
      } catch (err) {
        console.error("Error fetching GitHub stats:", err);
      } finally {
        setGithubLoading(false);
      }
    };
    fetchGithubStats();
  }, [githubUsername]);

  const leetChartData = [
    { name: "Easy", value: leetStats.easySolved },
    { name: "Medium", value: leetStats.mediumSolved },
    { name: "Hard", value: leetStats.hardSolved },
  ];

  // Static profiles
  const codingStats = [
    { platform: "HackerRank", solved: 80, rank: "5⭐ Java", icon: <FaTrophy /> },
  ];

  return (
    <section className="bg-secondary py-16 px-6" id="awards-stats">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* LeetCode Pie Chart */}
        <div className="bg-black p-6 rounded-xl shadow-lg flex flex-col gap-6">
          <h2 className="text-yellow-400 text-2xl font-bold text-center w-full">
            LeetCode Problem Stats
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            {leetLoading ? (
              <p className="text-white">Loading LeetCode stats...</p>
            ) : (
              <>
                {/* Pie Chart */}
                <div className="w-full md:w-1/2 h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={leetChartData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        isAnimationActive={true}
                      >
                        {leetChartData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#111",
                          border: "none",
                          color: "white",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Legend */}
                <div className="flex flex-col gap-4 w-full md:w-1/2">
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
              </>
            )}
          </div>
        </div>


        {/* Other Coding Profiles */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10">
            Other Coding Profiles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* HackerRank */}
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

            {/* GitHub */}
            <div className="bg-black text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
              <div className="flex items-center gap-3 text-yellow-400 text-2xl mb-3">
                <AiOutlineGithub /> <span>GitHub</span>
              </div>
              {githubLoading ? (
                <p>Loading GitHub stats...</p>
              ) : (
                <>
                  <p className="text-lg">Public Repository : {githubStats.repos}</p>
                  <p className="text-lg">Followers: {githubStats.followers}</p>
                  <a
                    href={`https://github.com/${githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    View Profile
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsStats;
