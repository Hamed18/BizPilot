import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion"; 
import { useNavigate } from "react-router-dom";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

const IdeaForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    budget: "",
    category: "",
    file: null,
  });
  const [isListening, setIsListening] = useState(false);

  const recognition =
    "webkitSpeechRecognition" in window
      ? new window.webkitSpeechRecognition()
      : null;

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setForm({ ...form, file: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Voice input (only for description field)
  const handleVoiceInput = () => {
    if (!recognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    recognition.continuous = false;
    recognition.lang = "en-US";

    if (!isListening) {
      recognition.start();
      setIsListening(true);

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setForm((prev) => ({
          ...prev,
          description: prev.description + " " + transcript,
        }));
      };

      recognition.onend = () => {
        setIsListening(false);
      };
    } else {
      recognition.stop();
      setIsListening(false);
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Idea:", form);
    // Later: send to backend (with FormData for file upload)
    navigate("/dashboard");
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className="text-2xl md:text-4xl font-bold text-center mb-8"
      >
        Share Your Business Idea 🚀
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        className="bg-white rounded-xl shadow-lg p-6 space-y-6"
      >
        {/* Title */}
        <div>
          <label className="block text-lg font-semibold mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g., Eco-friendly Shoe Brand"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Short Description + Voice */}
        <div>
          <label className="block text-lg font-semibold mb-2">Short Description</label>
          <div className="flex gap-2">
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe your business idea..."
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="button"
              onClick={handleVoiceInput}
              className={`p-3 rounded-full shadow-md transition ${
                isListening ? "bg-red-500 text-white" : "bg-yellow-400 text-black"
              }`}
            >
              {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
            </button>
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-lg font-semibold mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g., Dhaka"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block text-lg font-semibold mb-2">Budget</label>
          <input
            type="number"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            placeholder="e.g., 50000"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-lg font-semibold mb-2">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select category</option>
            <option value="tech">Technology</option>
            <option value="fashion">Fashion</option>
            <option value="food">Food & Beverage</option>
            <option value="health">Health & Wellness</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* File Upload (Image/PDF) */}
        <div>
          <label className="block text-lg font-semibold mb-2">Upload (Image or PDF)</label>
          <input
            type="file"
            name="file"
            accept="image/*,.pdf"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="flex justify-center"
        >
          <button
            type="submit"
            className="buttonStyle"
          >
            Submit Idea
          </button>
        </motion.div>
      </motion.form>
    </section>
  );
};

export default IdeaForm;
