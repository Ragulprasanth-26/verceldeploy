import React, { useEffect, useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { AiOutlineGithub } from "react-icons/ai";
import AwardsBg from "../asserts/stats.png"; // 🔹 Add your background image

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

  const COLORS = ["#F9A826", "#6BCB77", "#4D96FF"];


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
    <section
      id="awards-stats"
      className="relative bg-fixed bg-center bg-cover min-h-screen px-6 py-16"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f5e6d3] to-white"></div>
      <div className="relative z-10 max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#92400e] border-b-4 border-[#b45309] mb-12 w-[390px] mx-auto">
          Coding Profiles
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left Side - Stats Cards */}
        <div className="flex-1 flex flex-col gap-16">
          {/* LeetCode Pie Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
            <h2 className="text-[#5c4033] text-2xl font-bold text-center w-full">
              LeetCode Problem Stats
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              {leetLoading ? (
                <p className="text-[#5c4033]">Loading LeetCode stats...</p>
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
                          style={{
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        ></span>
                        <span className="text-[#5c4033] font-semibold">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#5c4033] text-center mb-10">
              Other Coding Profiles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {codingStats.map((item, i) => (
                <div
                  key={i}
                  className="bg-white text-[#5c4033] p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300"
                >
                  <div className="flex items-center gap-3 text-yellow-800 text-2xl mb-3">
                    {item.icon} <span>{item.platform}</span>
                  </div>
                  <p className="text-lg">Problems Solved: {item.solved}</p>
                  <p className="text-gray-400">Rank: {item.rank}</p>
                </div>
              ))}

              {/* GitHub */}
              <div className="bg-white text-[#5c4033] p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
                <div className="flex items-center gap-3 text-yellow-800 text-2xl mb-3">
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
                      className="text-blue-800 hover:underline"
                    >
                      View Profile
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative flex justify-center">
            {/* Decorative Shape */}
            <div
              className="absolute top-0 bottom-0 w-full h-full bg-[#fcd9b6] -z-10 animate-float animate-morph "

            ></div>

            <img
              src={AwardsBg}
              alt="About"
              className="max-w-sm w-full object-cover relative z-10"
            />
          </div>

        </div>
      </div>
    </section>

  );
};

export default AwardsStats;
