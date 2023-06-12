"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Accordion() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const handleToggle = () => setIsExpanded(prev => !prev);

  return (
    <main>
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-white">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Main Title
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Explanation</p>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div>
              <button
                className="w-full text-left py-2 px-4 rounded-md text-md font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 flex items-center justify-between"
                onClick={handleToggle}
              >
                Sub Title
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition duration-200 transform ${
                    isExpanded ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {isExpanded && (
                <div className="menu bg-gray-100 rounded-md py-2 px-4 mt-2">
                  <p className="text-gray-700 text-sm">Menu</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
