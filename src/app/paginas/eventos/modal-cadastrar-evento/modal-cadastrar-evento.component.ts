import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { FormularioEvento } from "../../../interfaces/Evento";
import CepService from "../../../servicos/cep.service";
import { EnderecoViaCep } from "../../../interfaces/Endereco";

@Component({
  selector: "app-modal-cadastrar-evento",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./modal-cadastrar-evento.component.html",
  styleUrl: "./modal-cadastrar-evento.component.css",
})
export class ModalCadastrarEventoComponent {
  @Output() onSubmitEvento = new EventEmitter<FormularioEvento>();
  formNewEvento: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cepService: CepService
  ) {
    this.formNewEvento = this.formBuilder.group({
      titulo: [""],
      data: [""],
      cep: [""],
      logradouro: [""],
      complemento: [""],
      bairro: [""],
      cidade: [""],
      uf: [""],
    });
  }

  consultaCep() {
    const cep = this.formNewEvento.get("cep")?.value.toString();

    this.cepService.consultarCep(cep).subscribe((res) => {
      if (res.erro) alert("CEP Inválido!");
      else
        this.formNewEvento.patchValue({
          logradouro: res.logradouro,
          complemento: res.complemento,
          bairro: res.bairro,
          cidade: res.localidade,
          uf: res.uf,
        });
    });
  }

  onSave() {
    const form = {
      titulo: this.formNewEvento.get("titulo")?.value,
      data: this.formNewEvento.get("data")?.value,
      cep: this.formNewEvento.get("cep")?.value,
      logradouro: this.formNewEvento.get("logradouro")?.value,
      complemento: this.formNewEvento.get("complemento")?.value,
      bairro: this.formNewEvento.get("bairro")?.value,
      cidade: this.formNewEvento.get("cidade")?.value,
      uf: this.formNewEvento.get("uf")?.value,
    } as FormularioEvento;

    this.formNewEvento.patchValue({
      titulo: "",
      data: "",
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
    })
    this.onSubmitEvento.emit(form);
  }
}
