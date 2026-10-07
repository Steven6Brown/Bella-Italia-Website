// WEEKLY SPECIALS: edit this file each Friday, then push to deploy.
// 1. Change weekOf.  2. Replace the foodSpecials list.  3. Save and commit. No other file needs to change.
// Each item is [name, description, price]. Leave price as "" to hide it.

export const weekOf = ""; // e.g. "Week of October 9". Empty shows the draft notice.

export const foodSpecials = []; // Waiting on the client's Friday list.

// Items shown on the online ordering menu as specials. Used until the weekly list above is filled in.
export { ONLINE_SPECIALS as onlineSpecials } from "./menu";

export const drinkSpecials = [
  ["Cinnamon Roll", "RumChata, Fireball, Kahlua, cream."],
  ["Happy Fall Ya'll", "Stoli Vanilla, pumpkin puree, ginger beer."],
  ["Banana Foster", "Banana liqueur, Stoli Vanilla, dark rum, cream."],
  ["Amaretto Smash", "Amaretto, lemon juice, club soda, apple cider."],
];

export const gelato = [
  ["Pistachio Tartufo", "Pistachio gelato with a cherry center, wrapped in a chocolate shell and finished with a delicate drip of chocolate."],
  ["Tartufo", "Chocolate and vanilla gelato with a cherry center, wrapped in a rich chocolate shell."],
  ["Tropical Tartufo", "Coconut and mango sorbet with a cherry center, wrapped in a white chocolate shell and topped with dark chocolate drizzle."],
  ["New World Spumoni", "Layers of pistachio, strawberry and chocolate gelato, topped with chopped pistachios and a cherry center."],
  ["Gelato To Go", "Pistachio, espresso and cherry vanilla."],
];
