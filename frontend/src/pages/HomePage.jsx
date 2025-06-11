import { useChatStore } from "../store/useChatStore";
import { useState } from "react";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)] relative">
          <div className="flex h-full rounded-lg overflow-hidden relative">

            {/* Sidebar */}
            {sidebarVisible && (
              <div className="w-full max-w-[260px] lg:max-w-[300px] border-r border-base-300 z-10">
                <Sidebar />
              </div>
            )}

            {/* Chat Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {selectedUser ? <ChatContainer /> : <NoChatSelected />}

              {/* Toggle Button for Mobile */}
              <button
                onClick={() => setSidebarVisible((prev) => !prev)}
                className="lg:hidden absolute bottom-3 left-1/2 transform -translate-x-1/2 px-4 py-1 text-sm rounded-full bg-primary text-white shadow z-30"
              >
                {sidebarVisible ? "Hide Contacts" : "Show Contacts"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
