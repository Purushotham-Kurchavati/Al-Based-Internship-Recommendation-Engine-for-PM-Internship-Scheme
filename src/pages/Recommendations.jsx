import React, { useEffect, useState } from "react";
import internships from "../data/internships";
import InternshipCard from "../components/InternshipCard";
import ApplyModal from "../components/ApplyModal";

export default function Recommendations() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("");
  const [list, setList] = useState(internships);

  useEffect(() => {
    let res = internships.filter(j => {
      const q = query.toLowerCase();
      return !q || j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q) || j.tags.join(" ").toLowerCase().includes(q);
    });
    if (tag) res = res.filter(j => j.tags.includes(tag));
    setList(res);
  }, [query, tag]);

  return (
    <div>
      <div className="mb-4 flex gap-3 items-center">
        <input className="border rounded px-3 py-2 w-80" placeholder="Search internships..." value={query} onChange={(e)=>setQuery(e.target.value)} />
        <select className="border px-3 py-2 rounded" value={tag} onChange={(e)=>setTag(e.target.value)}>
          <option value="">All tags</option>
          <option value="AI">AI</option>
          <option value="NLP">NLP</option>
          <option value="CV">CV</option>
          <option value="Recsys">Recsys</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map(j => <InternshipCard key={j.id} job={j} />)}
      </div>

      <ApplyModal />
    </div>
  );
}
