import { Header } from "./features/header";
import { LeftSidebar } from "./features/leftSidebar";
import { ProjectList } from "./features/projectList";
import { RightSidebar } from "./features/rightSidebar";

function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="flex">
        <LeftSidebar />
        <ProjectList />
        <RightSidebar />
      </div>
    </main>
  );
}

export default App;
