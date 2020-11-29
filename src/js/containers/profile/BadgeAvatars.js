import { connect } from "react-redux";
import BadgeAvatars from "../../components/profile/BadgeAvatars";

const mapStateToProps = (state, ownProps) => ({
  auth: state.authReducer,
  profile: state.profileReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getImage: (payload) =>
    dispatch({
      type: "GET_IMAGE",
      payload: payload,
    }),
  uploadImage: (payload) =>
    dispatch({
      type: "UPLOAD_IMAGE",
      payload: payload,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BadgeAvatars);
