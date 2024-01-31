"use client";

import React, { useState } from "react";
import { FC } from "react";
import { matchesType } from "../../../type";

const Status = ({
    matchesList,
    matchesListFinished,
}: {
    matchesList: matchesType[];
    matchesListFinished: matchesType[];
}) => {
    const [statusMatch, setStatusMatch] = useState<string>("TODAY");
    return (
      <div>
        <div className="flex space-x-4 mb-2 md:mb-4">
          <button
            className={`px-2 py-1 text-primary text-xs md:text-xs rounded-md ${
              statusMatch === "TODAY"
                ? "bg-teal-400 font-semibold"
                : "bg-slate-500 font-regular"
            }`}
            onClick={() => setStatusMatch("TODAY")}
          >
            today
          </button>
          <button
            className={`px-2 py-1 text-primary text-xs md:text-xs rounded-md ${
              statusMatch === "FINISHED"
                ? "bg-teal-400 font-semibold"
                : "bg-slate-500 font-regular"
            }`}
            onClick={() => setStatusMatch("FINISHED")}
          >
            finished
          </button>
        </div>
        <div className="w-full">
          {statusMatch === "TODAY"
            ? matchesList?.map((data) => (
                <div key={data.id}>
                  ppp
                  {data?.status === "TIMED" && <p>league</p>}
                </div>
              ))
            : null}
          {statusMatch === "FINISHED"
            ? matchesList?.map((data) => (
                <div key={data.id}>
                  ppp
                  {data?.status === "FINISHED" && <p>league</p>}
                </div>
              ))
            : null}
          {statusMatch === "TODAY"
            ? matchesList?.map((data) => (
                 <div key={data.id}>
                  ppp
                  {data?.status === "FINISHED" && <p>league</p>}
                </div>
              ))
            : null}
        </div>
      </div>
    );
};

export default Status;
