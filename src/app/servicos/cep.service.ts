import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EnderecoViaCep } from "../interfaces/Endereco";

@Injectable({
  providedIn: "root",
})
export default class CepService {
  constructor(private http: HttpClient) {}

  consultarCep(cep: string) {
    return this.http.get<EnderecoViaCep>(`https://viacep.com.br/ws/${cep}/json/`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
