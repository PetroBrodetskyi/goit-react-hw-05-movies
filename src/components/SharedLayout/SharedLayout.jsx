import { NavLink, Outlet } from 'react-router-dom'
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import css from "./SharedLayout.module.css"


export function SharedLayout() {
    return (
      <>
        <div className={css.flexmenu}>
            <NavLink to={'/'}>
                Home
              </NavLink>
              <NavLink to={'movies'}>
                Movies
            </NavLink>
          </div>
        <main>
          <section>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
          </section>
        </main>
      </>
    );
}