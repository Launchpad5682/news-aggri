export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITES":
      return { ...state, favorites: [...action.payload.favorites] };
    case "SET_ACTIVE_ARTICLE":
      return { ...state, activeArticle: { ...action.payload.article } };
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, { ...action.payload.article }],
      };
    case "REMOVE_FROM_FAVORITES": {
      const favorites = state.favorites.filter(
        (fav) => fav.title !== action.payload.article.title
      );
      return { ...state, favorites };
    }
    case "TOGGLE_FAVORITE":
      return { ...state, favoriteToggle: !state.favoriteToggle };
    case "SET_SOURCE":
      return { ...state, source: action.payload.source };
    default:
      return state;
  }
};