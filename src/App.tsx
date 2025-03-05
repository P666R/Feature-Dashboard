// import { DarkThemeToggle } from "flowbite-react";
//  use dark:bg-gray-800

import { Header } from "./features/header";
import { LeftSidebar } from "./features/leftSidebar";

function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <LeftSidebar />
    </main>
  );
}

export default App;
