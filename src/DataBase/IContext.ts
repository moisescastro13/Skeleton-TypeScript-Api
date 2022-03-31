export interface IDbContext {
  CreateConn(): Promise<void>;
}
