export function submitLogin(loginData) {
  return {
    type: "SUBMIT_SIGNUP",
    payload: {
      token: "token data",
      logging: true,  
    }
  };
}
