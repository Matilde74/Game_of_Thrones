export const characterDefaultImage = (onErrorEvent) =>  onErrorEvent.target.src = "Character";

export const Quotename = (name) => name.toLowerCase();

export const getcharacterQuote = (name) => `https://api.gameofthronesquotes.xyz/v1/author/${Quotename(name)}`