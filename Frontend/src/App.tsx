import { useState } from "react";

type Workshop = {
  id: number;
  title: string;
  date: string;
};

export default function App() {
  const [workshops, setWorkshops] = useState<Workshop[]>([
    { id: 1, title: "React Basics", date: "2026-01-10" },
    { id: 2, title: "Tailwind Intro", date: "2026-01-15" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-md rounded-xl bg-white p-5 shadow">
        <h1 className="mb-4 text-xl font-semibold">Workshop Tracker</h1>

        <ul className="space-y-2">
          {workshops.map((w) => (
            <li
              key={w.id}
              className="flex items-center justify-between rounded-lg border p-3"
            >
              <div>
                <p className="font-medium">{w.title}</p>
                <p className="text-sm text-gray-500">{w.date}</p>
              </div>
            </li>
          ))}
        </ul>

        {workshops.length === 0 && (
          <p className="mt-4 text-center text-sm text-gray-500">
            No workshops added yet.
          </p>
        )}
      </div>
    </div>
  );
}
