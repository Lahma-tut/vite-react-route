import '../index.css'
import cn from 'classnames'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import viteLogo from '/vite.svg'

export default function Layout() {
  return (
    <>
      <header className='header'>
        <div className='logo'>
          <a href='/'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
        </div>
        <div>
          <h2>Vite + React</h2>
          <p>React, TypeScript, RTK Query, React Router DOM 6, JSON Placeholder</p>
        </div>
      </header>
      <div className='menu'>
        <NavLink
          to='/'
          className={({ isActive }) => cn('a', { 'active': isActive })}>Home</NavLink>
        <NavLink
          to='/tasc'
          className={({ isActive }) => cn('a', { 'active': isActive })}>Задание</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}