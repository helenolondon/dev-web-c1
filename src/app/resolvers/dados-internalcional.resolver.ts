import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServicesService } from 'src/api/api-services.service';

@Injectable({
	providedIn: 'root'
})
export class dadosInternacionalResolver implements Resolve<any>{
	
	resolve() {
		return this.apiService.RetDadosInternacional();
	}

	constructor(private apiService: ApiServicesService) {
		
	}
}