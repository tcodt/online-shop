import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container mx-auto mt-4 p-4 md:p-0">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-4">
          <button
            className="p-2 bg-primary-blue text-white w-1/6 rounded-lg hover:bg-sky-600 transition"
            onClick={() => handleTabClick(0)}
          >
            پرفروش
          </button>
          <button
            className="p-2 bg-primary-blue text-white w-1/6 rounded-lg hover:bg-sky-600 transition"
            onClick={() => handleTabClick(1)}
          >
            پربازدید
          </button>
          <button
            className="p-2 bg-primary-blue text-white w-1/6 rounded-lg hover:bg-sky-600 transition"
            onClick={() => handleTabClick(2)}
          >
            تازه ترین
          </button>
        </div>

        <div className="grid grid-cols-6">
          {activeTab === 0 ? <div></div> : null}
          {activeTab === 1 ? <div>Tab 1 is open</div> : null}
          {activeTab === 2 ? <div>Tab 2 is open</div> : null}
        </div>
      </div>
    </div>
  );
}
