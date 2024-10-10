
export const getSpells = await fetch('https://api.open5e.com/v1/spells')
  .then((res) => res.json());
