import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-contato",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./contato.component.html",
  styleUrl: "./contato.component.css",
})
export class ContatoComponent {
  formContato: FormGroup;

  contatoEnviado: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.formContato = this.formBuilder.group({
      nome: ["", Validators.required],
      email: ["", Validators.required],
      mensagem: ["", [Validators.required, Validators.minLength(5)]],
    });
  }

  onSend() {
    if (this.formContato.valid) {
      console.log("Formulário Enviado!");
      console.log("Nome:", this.formContato.get("nome")?.value);
      console.log("Email:", this.formContato.get("email")?.value);
      console.log("Mensagem:", this.formContato.get("mensagem")?.value);

      this.contatoEnviado = true;
    }
  }
}
