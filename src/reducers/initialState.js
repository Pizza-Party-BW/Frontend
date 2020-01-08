const initialState = {
  loginState: {
    isLoading: false,
    isLoggedIn: false,
    error: {}
  },
  signUpState: {
    isLoading: false,
    isSignedUp: false,
    error: {}
  },
  mapState: {
    isLoading: false,
    map: {},
    error: {}
  },
  locationState: {
    isLoading: false,
    location: { uuid: "", name: "", title: "", description: "", players: [] },
    error: {}
  }
};

export default initialState;
