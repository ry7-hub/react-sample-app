import { connect } from "react-redux";
import AddUser from "../components/AddUser";

const mapStateToProps = (state, ownProps) => ({
  auth: state.authReducer,
  addUser: state.addUserReducer,
});

const mapDispatchToProps = (dispatch) => ({
  registUser: (payload) =>
    dispatch({
      type: "ADD_USER",
      payload: payload,
    }),
  openDialog: () =>
    dispatch({
      type: "OPEN_DIALOG",
    }),
  closeDialog: () =>
    dispatch({
      type: "CLOSE_DIALOG",
    }),
  allClear: () =>
    dispatch({
      type: "ALL_CLEAR_ADD_USER",
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
