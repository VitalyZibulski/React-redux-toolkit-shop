import React from 'react';

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          {list.slice(0, 5).map(({ id, name }) => (
            <li key={id}>
              <NavLink
                className={({isActive}) =>
                  `${styles.link} ${isActive} ? styles.active : ''}`
                }
                to={`/categories/${id}`}
              >{name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="#" target="_blank" className={styles.link}>
          Help
        </a>
        <a
          href="#"
          target="_blank"
          className={styles.link}
          style={{ textDecoration: "underline"}}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
