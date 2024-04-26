import * as React from 'react'
import { Link } from 'gatsby'

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div>
        <nav className="py-3">
            <ul className='flex'>
                <li className="px-3"><Link to="/">Home</Link></li>
                <li className="px-3"><Link to="/client">Clients</Link></li>
                <li className="px-3"><Link to="/product">Products</Link></li>
                <li className="px-3"><Link to="/files">Files</Link></li>
            </ul>
        </nav>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout