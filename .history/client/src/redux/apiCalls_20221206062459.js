import { loginFailure, loginStart, loginSuccess } from "../redux/apiCalls";
import { publicRequest } from "../requestMethods";

 const loginProcess = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export default {loginStart,loginFailure,loginSuccess}