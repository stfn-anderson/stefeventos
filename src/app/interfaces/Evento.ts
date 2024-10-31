export interface Evento {
  titulo: string;
  local: string;
  data: string;
}

export interface FormularioEvento {
  titulo: string;
  data: string;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}
