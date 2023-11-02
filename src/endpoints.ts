const BACKEND_URL: string = 'https://sggamescafe-29e6fe7774f1.herokuapp.com/'; //http://localhost:8080

export const userEndpoints = {
  login: (): string => `${BACKEND_URL}/sggamescafe/api/users/login`,
  editPwd: (ldap: string | null): string =>
    `${BACKEND_URL}/sggamescafe/api/users/${ldap}`,
};

export const gameEndpoints = {
  addNewGame: (): string => `${BACKEND_URL}/sggamescafe/api/games/new`,
  getAllGames: (): string => `${BACKEND_URL}/sggamescafe/api/games`,
  getOneGame: (id: string | null): string =>
    `${BACKEND_URL}/sggamescafe/api/games/${id}`,
  editStatType: (id: string | null): string =>
    `${BACKEND_URL}/sggamescafe/api/games/${id}`,
  deleteGame: (id: string | null): string =>
    `${BACKEND_URL}/sggamescafe/api/games/${id}`,
  addCheckout: (id: string | null): string =>
    `${BACKEND_URL}/sggamescafe/api/games/${id}/check`,
  addReturn: (id: string | null): string =>
    `${BACKEND_URL}/sggamescafe/api/games/${id}/return`,
};

export const bggEndpoints = {
  searchForGame: (query: string | null): string =>
    `${BACKEND_URL}/sggamescafe/api/bgg/search/${query}`,
  getBGGDetails: (id: string | null): string =>
    `${BACKEND_URL}/sggamescafe/api/bgg/game/${id}`,
};
