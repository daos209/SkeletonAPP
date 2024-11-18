import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbTaskService {
  private dbInstance: SQLiteObject;

  constructor(private sqlite: SQLite) {}

  async setDatabase() {
    this.dbInstance = await this.sqlite.create({
      name: 'data.db',
      location: 'default'
    });
    await this.createTables();
  }

  async createTables() {
    await this.dbInstance.executeSql(`
      CREATE TABLE IF NOT EXISTS sesion_data (
        user_name TEXT PRIMARY KEY NOT NULL,
        password INTEGER NOT NULL,
        active INTEGER NOT NULL
      );
    `, []);
  }

  async checkActiveSession(): Promise<boolean> {
    const res = await this.dbInstance.executeSql('SELECT * FROM sesion_data WHERE active = 1', []);
    return res.rows.length > 0;
  }
}