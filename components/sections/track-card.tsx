"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type TrackCardProps = {
  id: number;
  title: string;
  chair: string;
  description: string;
  topics: string[];
  icon: "brain" | "cpu" | "cloud" | "shield" | "sparkles";
};

export default function TrackCard({
  id,
  title,
  chair,
  description,
  topics,
  icon: Icon,
}: TrackCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[30px] border bg-white shadow-sm overflow-hidden">

      {/* Header */}

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-8 text-left hover:bg-slate-50 transition"
      >
        <div className="flex items-center gap-6">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

            <Icon
              className="text-[#00629B]"
              size={32}
            />

          </div>

          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-[#00629B]">

              Track {id}

            </p>

            <h3 className="mt-1 text-2xl font-bold">

              {title}

            </h3>

            <p className="mt-3 text-sm text-slate-500">

              <strong>Track Chair:</strong> {chair}

            </p>

          </div>

        </div>

        {open ? (
          <ChevronUp className="text-[#00629B]" />
        ) : (
          <ChevronDown className="text-[#00629B]" />
        )}

      </button>

      {/* Expandable Content */}

      {open && (

        <div className="border-t bg-slate-50 p-8">

          <p className="leading-8 text-slate-600">

            {description}

          </p>

                <h4 className="mt-8 text-lg font-semibold text-[#00629B]">
                Topics include (but are not limited to):
                </h4>

                <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-slate-700">

                {topics.map((topic) => (

                    <li key={topic}>
                    {topic}
                    </li>

                ))}

                </ul>

        </div>

      )}

    </div>
  );
}