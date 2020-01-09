import {
  GETTING_LOCATION,
  LOCATION_SUCCESS,
  LOCATION_ERROR,
  MOVING_PLAYER,
  MOVE_PLAYER_SUCCESS,
  MOVE_PLAYER_ERROR,
  CLEAR_ACTION_LOG
} from "../actions";

/*
State shape:
  gameState: {
    isLoading: false,
    location: { uuid: "", name: "", title: "", description: "", players: [] },
    actionLog: [],
    error: {}
  }
*/

export const locationReducer = (state, { type, payload }) => {
  switch (type) {
    case GETTING_LOCATION:
      return {
        ...state,
        isLoading: true
      };
    case LOCATION_SUCCESS:
      console.log("init location");
      return {
        ...state,
        isLoading: false,
        location: payload,
        actionLog:
          state.actionLog.length < 1
            ? [
                ...state.actionLog,
                { title: payload.title, description: payload.description }
              ]
            : [...state.actionLog]
      };
    case LOCATION_ERROR:
      return {
        ...state,
        error: payload,
        actionLog: [
          ...state.actionLog,
          { title: payload.title, description: payload.description }
        ]
      };
    case MOVING_PLAYER:
      return {
        ...state,
        isLoading: true
      };
    case MOVE_PLAYER_SUCCESS:
      console.log("moved");
      return {
        ...state,
        isLoading: false,
        location: { ...state.location, ...payload },
        actionLog:
          payload.description !==
          state.actionLog[state.actionLog.length - 1].description
            ? [
                ...state.actionLog,
                { title: payload.title, description: payload.description }
              ]
            : state.actionLog
      };
    case MOVE_PLAYER_ERROR:
      return {
        ...state,
        error: payload,
        actionLog: [
          ...state.actionLog,
          { title: payload.title, description: payload.description }
        ]
      };

    case CLEAR_ACTION_LOG:
      return {
        ...state,
        actionLog: []
      };
    default:
      return state;
  }
};
