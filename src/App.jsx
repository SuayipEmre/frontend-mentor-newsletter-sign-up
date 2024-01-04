import LeftContent from "./components/leftContent"
import RightContent from "./components/rightContent"
import MainLayout from "./layouts/mainLayout"

function App() {

  return (
    <div className="flex justify-center  md:items-center bg-[#242742] min-h-screen">
      <MainLayout>
        <LeftContent />
        <RightContent />
      </MainLayout>
    </div>
  )
}

export default App
