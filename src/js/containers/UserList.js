import { connect } from "react-redux";
import UserList from "../components/UserList";

const mapStateToProps = (state, ownProps) => ({
  auth: state.authReducer,
  userlist: state.userListReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () =>
    dispatch({
      type: "GET_USERS",
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
