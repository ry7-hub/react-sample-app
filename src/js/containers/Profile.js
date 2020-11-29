import { connect } from "react-redux";
import Profile from "../components/Profile";

const mapStateToProps = (state, ownProps) => ({
  auth: state.authReducer,
  profile: state.profileReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: (payload) =>
    dispatch({
      type: "GET_PROFILE",
      payload: payload,
    }),
  saveProfile: (payload) =>
    dispatch({
      type: "SAVE_PROFILE",
      payload: payload,
    }),
  editProfile: () =>
    dispatch({
      type: "EDIT_PROFILE",
    }),
  editFinishedProfile: () =>
    dispatch({
      type: "EDIT_FINISHED_PROFILE",
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
