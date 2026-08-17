import type { WorldCup } from "../types/worldCup";

interface WorldCupTableProps {
  worldCups: WorldCup[];
}

export default function WorldCupTable({ worldCups }: WorldCupTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
      <table className="w-full text-left">
        <thead className="border-b border-zinc-200 bg-zinc-50">
          <tr>
            <th className="px-6 py-4 text-sm font-semibold text-zinc-700">
              Year
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-zinc-700">
              Winner
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-zinc-700">
              Runner-up
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-zinc-100">
          {worldCups.map((worldCup) => (
            <tr
              key={worldCup.year}
              className="transition-colors hover:bg-zinc-50"
            >
              <td className="px-6 py-4 text-sm font-medium text-zinc-900">
                {worldCup.year}
              </td>

              <td className="px-6 py-4 text-sm text-zinc-700">
                {worldCup.winner}
              </td>

              <td className="px-6 py-4 text-sm text-zinc-700">
                {worldCup.runnerUp}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
