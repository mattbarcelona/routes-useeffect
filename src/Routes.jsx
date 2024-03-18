// import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Header from './templates/Header'
import HeaderLog from './templates/HeaderLog'
import Help from './pages/Help'
import Faqs from './pages/Faqs'
import Error from './pages/Error'
import Test from './pages/Test'

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error />,
        element: <Header />,
        children: [
            {path:'/', element: <Home/>},
            {path:'/projects', element: <Projects/>},
            {path:'/resume', element: <Resume/>},
            {path:'/test', element: <Test/>}
        ]
    },
    {
        path: '/help',
        element: <HeaderLog />,
        children: [
            {path:'/help', element: <Help/>},
            {path:'faqs', element: <Faqs/>}
        ]
    }
])

export default router































// function Roto(){
//     return (

//         // <Router>
//         //     <Routes>
//         //         <Route path='/' element={<Home/>} />
//         //         <Route path='/projects' element= {<Projects/>}/>
//         //         <Route path ='/resume' element={<Resume/>} />
//         //     </Routes>
//         // </Router>
//     )
// }

// export default Roto