import { OttomanError } from '../exceptions/ottoman-errors';

export class SelectClauseException extends OttomanError {
  constructor() {
    // todo: update message
    super('The SELECT clause does not have the proper structure');
  }
}

export class WhereClauseException extends OttomanError {
  constructor() {
    super('The WHERE clause does not have the proper structure');
  }
}

export class InWithinOperatorExceptions extends WhereClauseException {
  constructor() {
    super();
    this.message = `The search_expr, target_expr and operator (IN | WITHIN) values are required for collection operators.`;
  }
}
export class CollectionInWithInExceptions extends WhereClauseException {
  constructor() {
    super();
    this.message = 'The Collection Operator needs to have the following clauses declared (IN | WITHIN) and SATISFIES.';
  }
}
export class MultipleQueryTypesException extends OttomanError {
  constructor(type1: string, type2: string) {
    super(`Cannot combine multiple query types (ex: ${type1} with ${type2}`);
  }
}

export class QueryOperatorNotFoundException extends WhereClauseException {
  constructor(operator: string) {
    super();
    this.message = `Operator not found: ${operator}`;
  }
}

export class QueryGroupByParamsException extends WhereClauseException {
  constructor() {
    super();
    this.message = `The GROUP BY clause must be defined to use the LETTING and HAVING clauses`;
  }
}

export class IndexParamsOnExceptions extends OttomanError {
  constructor(clause: string[]) {
    super(`The ON parameter can only be applied in the following clauses: ${JSON.stringify(clause)}`);
  }
}

export class IndexParamsUsingGSIExceptions extends OttomanError {
  constructor(clause: string[]) {
    super(`The USING GSI parameter can only be applied in the following clauses: ${JSON.stringify(clause)}`);
  }
}
