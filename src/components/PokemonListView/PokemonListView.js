import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store";
import LoadingSpinner from "../LoadingSpinner";
import styles from "./PokemonListView.css";

function PokemonListView() {
  const fetchList = useStore((state) => state.fetchList);
  const listData = useStore((state) => state.listData);
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div>
      {listData.length > 0 && (
        <ul className={styles.pokemonList}>
          {listData.map(({ name }, idx) => (
            <Link key={name} to={`/details/${name}`}>
              <li className={styles.pokemonListItem}>
                #{idx + 1} - {name}
              </li>
            </Link>
          ))}
        </ul>
      )}
      {listData.length === 0 && <LoadingSpinner />}
    </div>
  );
}

export default PokemonListView;
