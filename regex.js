function validateUsr(username) {
    let regex = /^[a-z0-9_]{4,16}$/;
    return regex.test(username);
  }