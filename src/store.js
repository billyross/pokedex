import create from "zustand";

const LIST_URL = "https://pokeapi.co/api/v2/pokemon?limit=150";
const DETAIL_URL = "https://pokeapi.co/api/v2/pokemon/";

export const useStore = create((set) => ({
  listData: [],
  detailData: {},
  fetchList: async () => {
    const response = await fetch(LIST_URL);
    const data = await response.json();
    set({ listData: data.results });
  },
  fetchDetails: async (name) => {
    const response = await fetch(`${DETAIL_URL}${name}`);
    const data = await response.json();
    set((state) => {
      const { detailData } = state;
      detailData[name] = {
        name: data.name,
        height: data.height * 10,
        weight: data.weight / 10,
        types: data.types.map((type) => type.type.name),
        moves: data.moves.map((move) => move.move.name).slice(0, 10),
        abilities: data.abilities.map((ability) => ability.ability.name),
        artwork: data.sprites.other["official-artwork"]["front_default"],
      };
      return { detailData };
    });
  },
}));
