export class CustomError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
  }
}

export class InvalidName extends CustomError {
  constructor() {
    super(400, "Nome inválido");
  }
}

export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "Email inválido");
  }
}

export class InvalidPassword extends CustomError {
  constructor() {
    super(400, "Senha inválida");
  }
}

export class UserNotFound extends CustomError {
  constructor() {
    super(404, "Usuário não encontrado");
  }
}

export class Unauthorizded extends CustomError {
  constructor() {
    super(401, "Usuário não autorizado, faça o login novamente");
  }
}

export class invalidToken extends CustomError {
  constructor() {
    super(400, "Token não foi informado no headers");
  }
}

export class invalidAuthenticatorData extends CustomError {
  constructor() {
    super(400, "Usuário não autorizado");
  }
}
