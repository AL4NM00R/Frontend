import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
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

  addUser() {
    // Validamos que el usuario ingrese valores
    if (this.username == '' || this.password == '' || this.confirmPassword == '' || this.fechaNacimiento == '' || this.direccion == '' || this.telefono == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }
  
    // Validamos que las passwords sean iguales
    if (this.password != this.confirmPassword) {
      this.toastr.error('Las passwords ingresadas son distintas', 'Error');
      return;
    }
  
    // Creamos el objeto
    const user: User = {
      username: this.username,
      password: this.password,
      fechaNacimiento: this.fechaNacimiento, // Asegúrate de proporcionar un valor válido
      direccion: this.direccion, // Asegúrate de proporcionar un valor válido
      telefono: this.telefono // Asegúrate de proporcionar un valor válido
    };
    
  
    this.loading = true;
    this._userService.signIn(user).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`El usuario ${this.username} fue registrado con exito`, 'Usuario registrado');
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }
  

  formatDate(event: any) {
    const input = event.target.value;
    const formatted = input
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')
        .replace(/(\d{2})(\d{2})\/(\d{2})\/(\d{4})/, '$1/$2/$4'); // Control de longitud máxima para el año
    this.fechaNacimiento = formatted;
  }


}
