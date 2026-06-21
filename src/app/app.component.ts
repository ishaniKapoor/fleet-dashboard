import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-shell">
      <header>
        <h1>Fleet Dashboard</h1>
      </header>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [
    `
      .app-shell {
        font-family: Arial, sans-serif;
        padding: 24px;
        max-width: 1200px;
        margin: 0 auto;
      }
      header {
        margin-bottom: 20px;
      }
    `
  ]
})
export class AppComponent {}
