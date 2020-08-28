import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../store";
import LoadingSpinner from "../LoadingSpinner";
import styles from "./PokemonDetailView.css";

function PokemonDetailView() {
  const { name } = useParams();
  const fetchDetails = useStore((state) => state.fetchDetails);
  const data = useStore((state) => state.detailData[name]);
  useEffect(() => {
    fetchDetails(name);
  }, []);
  return (
    <div>
      {data && (
        <div className={styles.detailsContainer}>
          <h1 className={styles.name}>{data.name}</h1>
          <div className={styles.pokemonDetailViewPanel}>
            <table>
              <tbody>
                <tr>
                  <td>Height:</td>
                  <td>{data.height} cm</td>
                </tr>
                <tr>
                  <td>Weight:</td>
                  <td>{data.weight} kg</td>
                </tr>
                <tr>
                  <td>Type(s):</td>
                  <td>{data.types.join(", ")}</td>
                </tr>
                <tr>
                  <td>Moves:</td>
                  <td>
                    <ul>
                      {data.moves.map((move) => (
                        <li key={move}>{move}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Abilities:</td>
                  <td>
                    <ul>
                      {data.abilities.map((ability) => (
                        <li key={ability}>{ability}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <img
              src={data.artwork}
              alt={data.name}
              className={styles.artwork}
            />
          </div>
        </div>
      )}
      {!data && <LoadingSpinner />}
    </div>
  );
}

export default PokemonDetailView;
