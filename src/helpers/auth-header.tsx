const authUserHeader = () => {
    const user = JSON.parse(localStorage.getItem("canary_user") || '{}');
    if (user && user.token) {
      return { "authorizationToken": user.token };
    } else {
      return {"authorizationToken": ""};
    }
  };
  
  export { authUserHeader };