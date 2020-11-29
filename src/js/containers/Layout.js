import { connect } from "react-redux";
import Layout from "../components/Layout";

const mapStateToProps = (state, ownProps) => ({ auth: state.authReducer });

const mapDispatchToProps = (dispatch) => ({
  loginCheck: () =>
    dispatch({
      type: "LOGIN_CHECK",
    }),
  logout: () => dispatch({ type: "LOGOUT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
