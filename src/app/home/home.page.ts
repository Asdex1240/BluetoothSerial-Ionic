import { Component } from '@angular/core';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  res = 'res'
  err = 'err'
  disp: any;

  constructor(private bt: BluetoothSerial, private ap: AndroidPermissions) {
    this.permisos();
    this.bluetooth();
  }
  permisos(){
    this.ap.checkPermission(this.ap.PERMISSION.BLUETOOTH_CONNECT).then((result) =>{
      if(!result.hasPermission){
        this.ap.requestPermissions(this.ap.PERMISSION.BLUETOOTH_CONNECT)
      }
    }, (err)=>{
      this.ap.requestPermissions(this.ap.PERMISSION.BLUETOOTH_CONNECT)
    })
  }

  bluetooth(){
    this.bt.isEnabled().then(res =>{
      this.res = res;
      this.listaDisp()
    });
  }

  listaDisp(){
    this.bt.list().then(succes =>{
      this.disp = succes;
    }, err =>{
      this.err = 'Error en listaDisp '+err
    })
  }

}
interface pairedList {
  'class': number,
  'id': String,
  'address': String,
  'name': String
}