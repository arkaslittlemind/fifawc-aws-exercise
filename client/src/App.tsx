import { useEffect, useState } from "react";
import WorldCupTable from "./components/WorldCupTable";
import type { WorldCup } from "./types/worldCup";

const API_URL = "http://localhost:3000";

function App() {
  const [worldCups, setWorldCups] = useState<WorldCup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorldCups = async () => {
      try {
        const response = await fetch(`${API_URL}/api/world-cups`);

        if (!response.ok) {
          throw new Error("Failed to fetch World Cup data");
        }

        const data: WorldCup[] = await response.json();

        setWorldCups(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went wrong",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchWorldCups();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <header className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-zinc-500">
            FIFA World Cup
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-zinc-950">
            Winners & Runner-ups
          </h1>

          <p className="mt-3 max-w-2xl text-zinc-600">
            A simple overview of recent FIFA World Cup finals.
          </p>
        </header>

        {loading && (
          <div className="rounded-xl border border-zinc-200 bg-white p-8 text-center text-zinc-500">
            Loading...
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && <WorldCupTable worldCups={worldCups} />}
      </div>
    </main>
  );
}

export default App;
