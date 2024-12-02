import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Aquí puedes agregar la lógica de autenticación
    // Por ejemplo, puedes llamar a un servicio de autenticación
    if (this.email === 'test@example.com' && this.password === 'password') {
      // Redirigir al usuario a la página de inicio después de un inicio de sesión exitoso
      localStorage.setItem('isAuthenticated', 'true'); // Guardar el estado de autenticación
      this.router.navigate(['/home']);
    } else {
      // Mostrar un mensaje de error
      alert('Invalid credentials');
    }
  }
}