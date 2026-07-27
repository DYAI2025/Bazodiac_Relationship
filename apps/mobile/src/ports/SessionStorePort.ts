export interface SessionStorePort {
  read(): Promise<string | null>;
  write(token: string): Promise<void>;
  clear(): Promise<void>;
}

export class DemoMemorySessionStore implements SessionStorePort {
  private token: string | null = null;
  read() { return Promise.resolve(this.token); }
  write(token: string) { this.token = token; return Promise.resolve(); }
  clear() { this.token = null; return Promise.resolve(); }
}
