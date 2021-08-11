import React from 'react'
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div>
       <nav>
          <ul>
            <li><Link to="/app">Hjem</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
    </div>
  )
}
