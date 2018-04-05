import { Component, OnInit } from '@angular/core';
import { MarsImage } from '../shared/model/mars-image';
import { NasaApiService } from '../shared/services/nasa-api.service';

@Component({
  selector: 'ed-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {
  marsImages: MarsImage[];
  cameras: string[] = ['NAVCAM', 'CHEMCAM', 'FHAZ', 'RHAZ', 'MAST'];
  currentCamera: string;
  error: string;

  //Inyeccion de Dependencias
  constructor(private servicio: NasaApiService) { }

  ngOnInit() {
    this.currentCamera = this.cameras[0];
    this.refreshView(this.currentCamera);
  }


  onSelectCamera(camera: string) {
    this.refreshView(camera);
  }

  private refreshView(camera: string){
    this.servicio.getMarsImages(camera)
      .subscribe(result => {
        this.marsImages = result.photos;
      }, error=>{
        console.log('Error al conectar con el servidor');
        this.error = 'Error al conectar con el servidor';
      });
  }
}
