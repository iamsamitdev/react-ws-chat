import { NavLink, Route, Routes } from 'react-router-dom'
import PageA from '../../pages/PageA'
import PageB from '../../pages/PageB'
import PageC from '../../pages/PageC'
import PageD from '../../pages/PageD'
import PageE from '../../pages/PageE'

function MainLayout({ children }) {

//   const location = useLocation()
//   console.log(location.pathname)

  return (
        <div className="grid grid-cols-6">
            {/* Header */}
            {/* <header className="col-span-5 p-10 bg-amber-200">
                <h1 className="text-2xl text-center font-bold">Header</h1>
            </header> */}

            {/* Lefe Menu */}
            <aside className="col-span-5 md:col-span-1 p-10 bg-gray-700">
                <h1 className="text-2xl text-center font-bold text-white">Left Menu</h1>
            </aside>

            {/* Main */}
            <main className="col-span-5 md:col-span-2 h-screen p-10 bg-blue-200">
                
                <div className="grid grid-cols-5 mb-8">
                    
                    <NavLink to="/app/PageA" className="col-span-5 md:col-span-1 bg-blue-900 text-white rounded-md py-2 px-2 mx-3 text-center">A</NavLink>

                    <NavLink to="/app/PageB" className="col-span-5 md:col-span-1 bg-orange-900 text-white rounded-md py-2 px-2 mx-3 text-center">B</NavLink>

                    <NavLink to="/app/PageC" className="col-span-5 md:col-span-1 bg-teal-900 text-white rounded-md py-2 px-2 mx-3 text-center">C</NavLink>

                    <NavLink to="/app/PageD" className="col-span-5 md:col-span-1 bg-yellow-500 rounded-md py-2 px-2 mx-3 text-center">D</NavLink>

                    <NavLink to="/app/PageE" className="col-span-5 md:col-span-1 bg-pink-600 rounded-md py-2 px-2 mx-3 text-center">E</NavLink>

                </div>

                {children}
                
            </main>

            {/* Right sidebar */}
            <aside className="col-span-5 md:col-span-3 p-10 bg-rose-300">
                <Routes>
                    <Route path="/PageA" element={<PageA />} />
                    <Route path="/PageB" element={<PageB />} />
                    <Route path="/PageC" element={<PageC />} />
                    <Route path="/PageD" element={<PageD />} />
                    <Route path="/PageE" element={<PageE />} />
                </Routes>
            </aside>

            {/* Footer */}
            <footer className="col-span-6 p-10 bg-slate-500">
                <h1 className="text-2xl text-center font-bold text-white">Footer</h1>
            </footer>

        </div>
  )
}

export default MainLayout