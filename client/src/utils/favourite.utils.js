const favouriteUtils = {
    check: ({ listFavourites, mediaId }) => listFavourites && listFavorites.find(e => e.mediaId.toString() === mediaId.toString()) !== undefined
  };
  
  export default favouriteUtils;