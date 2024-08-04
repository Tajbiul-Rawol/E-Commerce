import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Layout = ({ categories }) => {

    const renderCategories = () => {
        return categories.data.map(c =>
            <li key={c.id} ><Link to={`/categories/${c.id}`}>{c.title}</Link></li>
        )
    }


    return (
        <>
            <header> E-Store</header>
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