import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  fechaNacimiento: string = ''; 
  direccion: string = ''; 
  telefono: string = ''; 
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService) { }

  ngOnInit(): void {
  }

  login() {

    // Validamos que el usuario ingrese datos
    if (this.username == '' || this.password == '' || this.confirmPassword == '' || this.fechaNacimiento == '' || this.direccion == '' || this.telefono == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return
    }

    // Creamos el body
    const user: User = {
      username: this.username,
      password: this.password,
      fechaNacimiento: this.fechaNacimiento, // Asegúrate de proporcionar un valor válido
      direccion: this.direccion, // Asegúrate de proporcionar un valor válido
      telefono: this.telefono // Asegúrate de proporcionar un valor válido
    };

    this.loading = true;
    this._userService.login(user).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/dashboard'])
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false
      }
    })
  }

  

}
