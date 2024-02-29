"use client"
import { useState, useEffect } from "react";

export default function Quetes() {
  const [filter, setFilter] = useState("all");
  const [rows, setRows] = useState([]);

  const getData = async () => {
    await fetch(`/api/get-all`)
      .then((res) => res.json())
      .then((data) => {
        setRows(data.data.rows);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredRows = () => {
    switch (filter) {
      case "completed":
        return rows.filter((quest) => quest.status);
      case "pending":
        return rows.filter((quest) => !quest.status);
      default:
        return rows;
    }
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      <h1>Archive des quêtes</h1>
      <div className="flex gap-4 filter">
        <button
          className={`btn-filter ${filter === "all" && "active"}`}
          onClick={() => setFilter("all")}
        >
          Toutes
        </button>
        <button
          className={`btn-filter ${filter === "completed" && "active"}`}
          onClick={() => setFilter("completed")}
        >
          Terminées
        </button>
        <button
          className={`btn-filter ${filter === "pending" && "active"}`}
          onClick={() => setFilter("pending")}
        >
          À faire
        </button>
      </div>
      {filteredRows().map((quest, index) => (
        <div key={index}>
          <a
            href={`/quetes/${quest.slug}`}
            className="flex flex-col items-center bg-dark border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700/50 dark:bg-gray-800/50 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-60 md:h-auto md:rounded-none md:rounded-s-lg border-b border-gray-50"
              src={quest.thumbnail}
              alt="image quête"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                {quest.title}
              </h5>
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                {quest.description}
              </p>
              <button
                type="button"
                className="text-white bg-theme  focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Découvrez
              </button>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
