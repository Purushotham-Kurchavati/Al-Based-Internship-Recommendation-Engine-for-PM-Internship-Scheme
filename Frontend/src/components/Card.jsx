export default function Card({ title, company, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-indigo-600">{title}</h2>
      <p className="text-gray-700 mt-1">{company}</p>
      <p className="text-gray-500 text-sm mt-2">{desc}</p>
      <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
        Apply Now
      </button>
    </div>
  );
}
