// import { DarkThemeToggle } from "flowbite-react";
//  use dark:bg-gray-800

import { Header } from "./features/header";
import { LeftSidebar } from "./features/leftSidebar";
import { ProjectList } from "./features/projectList";

function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="flex">
        <LeftSidebar />
        <ProjectList />
      </div>
    </main>
  );
}

export default App;
