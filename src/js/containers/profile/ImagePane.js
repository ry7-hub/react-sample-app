import { connect } from "react-redux";
import ImagePane from "../../components/profile/ImagePane";

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
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagePane);
