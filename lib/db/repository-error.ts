/** A caller mistake the API reports with its status; anything else is a 503. */
export class RepositoryError<Code extends string = string> extends Error {
  readonly name: string = 'RepositoryError';

  constructor(
    message: string,
    readonly status: 400 | 404,
    readonly code: Code,
  ) {
    super(message);
  }
}
