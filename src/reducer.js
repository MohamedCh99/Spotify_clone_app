export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove after finished developing...
  // token:
  //   'BQAMkH8n3dvQAfWMv7BTtHFqm_Swqxgv5-XymGUaOQHPVua8GROMqi15HM_cmtIGivLrZlwtCJQR1rLgyruVl84O7sY3rS4Apk9TTAm9F6XdAoDvKProqwDHjVw-zg60X01cOwE_SCeg6pvQBLvqCSlw6l4uwm03oJvtHhZExx6OFkbpgHVKHjGh5acQSOa2ukGAf8EgJzg3xPUc3Hvvawdb',
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      };

    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
