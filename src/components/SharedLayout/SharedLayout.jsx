import { NavLink, Outlet } from 'react-router-dom'
import { Suspense } from 'react';

export function SharedLayout() {
    return (
      <>
              <NavLink to={'/'}>
                Home
              </NavLink>
              <NavLink to={'movies'}>
                Movies
              </NavLink>
        <main>
          <section>
              <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </Suspense>
          </section>
        </main>
      </>
    );
}