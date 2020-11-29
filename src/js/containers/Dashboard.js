import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";

const mapStateToProps = (state, ownProps) => ({ auth: state.authReducer });

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
