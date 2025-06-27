import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// Interfaz para la respuesta de la conversión de divisas (la que viene del backend)
export interface CurrencyConversionResponse {
  moneda_origen: string;
  moneda_destino: string;
  rateo_convercion: number;
  cantidad_original: number;
  cantidad_convertida: number;
}

export interface Divisas {
    from: string;
    to: string;
    rating: number;
    dateRequest: Date;
}   

@Injectable({
  providedIn: 'root'
})
export class DivisasService {
  private apiUrl = 'http://localhost:3000/api/cambioDivisa';

  constructor(private http: HttpClient) { }

  /**
   * Realiza la conversión de divisa a través del backend.
   * @param from Moneda de origen (ej: "USD", "CLP")
   * @param to Moneda de destino (ej: "CLP", "EUR")
   * @param amount Cantidad a convertir
   * @returns Observable con el resultado de la conversión.
   */
  convertirDivisa(from: string, to: string, amount: number): Observable<CurrencyConversionResponse> {
    let params = new HttpParams();
    params = params.append('from', from);
    params = params.append('to', to);
    params = params.append('amount', amount.toString());

    return this.http.get<CurrencyConversionResponse>(`${this.apiUrl}/convertir`, { params });
  }
}
