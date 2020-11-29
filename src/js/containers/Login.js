import { connect } from "react-redux";
import Login from "../components/Login";

const mapStateToProps = (state, ownProps) => ({ auth: state.authReducer });

const mapDispatchToProps = (dispatch) => ({
  login: (payload) =>
    dispatch({
      type: "LOGIN",
      payload: payload,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
