import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Mock Data
const revenueData = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 4000 },
  { month: "Mar", revenue: 6000 },
  { month: "Apr", revenue: 8000 },
  { month: "May", revenue: 10000 },
  { month: "Jun", revenue: 12000 },
];

const costData = [
  { name: "Marketing", value: 40 },
  { name: "Production", value: 30 },
  { name: "Logistics", value: 20 },
  { name: "Misc", value: 10 },
];

const COLORS = ["#facc15", "#60a5fa", "#f87171", "#34d399"];

const Dashboard = ({ idea }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
	    <div className="p-6 space-y-6">
      <IdeaForm onCreated={(id)=>{ window.location.href = `/ideas/${id}/chat`; }} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ideas.map(i => (
          <div key={i._id} className="bg-white rounded-2xl shadow p-4">
            <div className="font-semibold">{i.title}</div>
            <div className="text-sm text-gray-600">{i.location} · ${i.budget}</div>
            <p className="text-sm mt-2 line-clamp-3">{i.description}</p>
            <a href={`/ideas/${i._id}/chat`} className="text-blue-600 mt-2 inline-block">Open Chat</a>
          </div>
        ))}
      </div>
    </div>
      {/* Heading */}
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className="text-2xl md:text-4xl font-bold text-center mb-10"
      >
        Idea Dashboard 📊
      </motion.h2>

      {/* Idea Card */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        className="bg-white rounded-xl shadow-lg p-6 mb-10"
      >
        <h3 className="text-xl font-semibold mb-2">{idea?.title || "Eco-friendly Shoe Brand"}</h3>
        <p className="text-gray-600">{idea?.description || "A sustainable shoe brand based in Dhaka with focus on eco-materials and youth market."}</p>
      </motion.div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Revenue Line Chart */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h4 className="text-lg font-semibold mb-4">Revenue Projection</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Cost Pie Chart */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h4 className="text-lg font-semibold mb-4">Cost Breakdown</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={costData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {costData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Checklist */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h4 className="text-lg font-semibold mb-4">Roadmap Checklist</h4>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            ✅ <span>Market Research Completed</span>
          </li>
          <li className="flex items-center gap-2">
            🚀 <span>MVP Launch</span>
          </li>
          <li className="flex items-center gap-2">
            📢 <span>Marketing Campaign</span>
          </li>
          <li className="flex items-center gap-2">
            💰 <span>Investor Pitch</span>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Dashboard;
