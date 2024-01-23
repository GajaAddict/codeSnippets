
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useParams, Outlet, Naviage, Navlink, useNavigate } from "react-router-dom";

//BrowserRouter, Hashrouter, HistoryRouter, MemoryRouter - urldoesn't change, Static- For Server, Native - for reactNative 

//index.js
<BrowserRouter>
    <App />
</BrowserRouter>

//App.js
export default function App() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/books">Books</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<BookList />} />
                <Route path="/book/:id" element={<Book />} />
                <Route path="/book/new" element={<NewBook />} />  {/* smart enough to know with v6 */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>

        </>
    );
}


export default function App() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/books">Books</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<BookLayout />}>      //BookLayout will be rendered in all child routes - optional. Outlet needs to be added to BookLayout if this is added.
                    <Route index element={<BookList />} />          //index will match /books route
                    <Route path=":id" element={<Book />} />
                    <Route path="new" element={<NewBook />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>

        </>
    );
}

//Outlet, Context
export const BookLayout() {
    return (
        <>
            <Outlet context={{ hello: 'world' }} />
        </>
    )
}

export const Book() {
    const params = useParams()      //to get route params
    const obj = useOutletContext()  //use context in child
    return (
        <>
            <h1>Book{params.id}{obj.hello}</h1>
        </>
    )
}

//---------------------------------------------------------------------------
// child routes in a separate component

export default function App() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>                                        //reloadDocument refreshes page
                <Link to="/books" replace reloadDocument>Books</Link>          //replace goes back 2 pages when back button clicked
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/*" element={<BookRoutes />} />      //BookRoutes has its own routes
                <Route path="*" element={<PageNotFound />} />
            </Routes>

        </>
    );
}

export default function BookRoutes() {
    return (
        <>
            <BookLayout />              //Alwasy show component
            <Routes>
                <Route index element={<BookList />} />
                <Route path=":id" element={<Book />} />
                <Route path="new" element={<NewBook />} />
            </Routes>
        </>
    )
}

//---------------------------------------------------------------------------
//hooks

export default function App() {
    let element = useRoutes([
        {
            path: "/",
            element: <NavLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "about",
                    element: <About />
                }
            ],
        }
    ]);

    return (
        { element }
    )
}


//---------------------------------------------------------------------------

const params = useParams()
console.log(params.id)

const searchparams = useSearchParams() // for params after ?
searchparams.get('key')

const loc = useLocation() // To get the current route



export default function NotFound() {

    useEffect(() => {
        setTimeout(() => {
            const navigate = useNavigate();
            navigate('/', { state: 'some message' })           //navigate('-1') - For back // state - to pass values to components
        }, 1000)
    }, [])

    return (
        <>
            <Navlink /> // similar to Link. Can add styles and {isActive} obj to style the cuurent active tab
            <Naviage to="/" /> //similar to Link. but automatically navigate to specific page
        </>
    )
}


//---------------------------------------------------------------------------
//Protected Route

//PrivateRoutes.js
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = { 'token': false }
    return (
        auth.token ? <Outlet /> : <Navigate to="/login" />
    )
}
export default PrivateRoutes;

//App.js
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import PrivateRoutes from './utils/PrivateRoutes'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route element={<Home />} path="/" exact />
                        <Route element={<Products />} path="/products" />
                    </Route>
                    <Route element={<Login />} path="/login" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;