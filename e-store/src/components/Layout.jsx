import { faBasketShopping, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'


const Layout = ({ categories }) => {

    const navigate = useNavigate();

    const renderCategories = () => {
        return categories.data.map(c =>
            <li key={c.id} ><Link to={`/categories/${c.id}`}>{c.title}</Link></li>
        )
    }


    return (
        <>
            <header>
               <Link to="/"><FontAwesomeIcon id="headerHomeIcon" icon={faHome} /></Link> 
                <div id="headerHomeTitle">
                    E-Store
                </div>
                <Link to="/basket"><FontAwesomeIcon icon={faBasketShopping} /></Link> 
            </header>
            <section>
                <nav>
                    {categories.message && <div>Error: {categories.message}</div>}
                    <ul>
                        {
                            categories.data && renderCategories()
                        }
                    </ul>
                </nav>
                <main>
                    {/* the outlet will render all components here */}
                    <Outlet></Outlet>
                </main>
            </section>
            <footer><Link to='/' >Home</Link> | <Link to='/basket' >Basket</Link> </footer>
        </>
    )
}

export default Layout