

import { MobileLibrary } from './MobileLibrary';
import { Mobile } from '../reto repaso 3/mobile2';

let movil1 = new Mobile();

movil1.setName("Xiaomi Mi11");
movil1.setCameraNumber(5);
movil1.setColor("negro");
movil1.setIs5G(true);
movil1.setSdSize(128);
movil1.setPrice(700);

let movil2 = new Mobile();

movil2.setName("Samsung Galaxy s21")
movil2.setCameraNumber(3);
movil2.setColor("azul");
movil2.setIs5G(true);
movil2.setSdSize(128)
movil2.setPrice(750);

let movil3 = new Mobile()

movil3.setName("OnePlus 9 Pro");
movil3.setCameraNumber(4);
movil3.setColor("gris");
movil3.setIs5G(true);
movil3.setSdSize(256)
movil3.setPrice(909);

let movil4 = new Mobile();

movil4.setName("iPhone X");
movil4.setCameraNumber(3);
movil4.setColor("negro");
movil4.setIs5G(true);
movil4.setSdSize(64);
movil4.setPrice(348)

let mobiles:Mobile[];

mobiles = [movil1, movil2, movil3, movil4];

let Libreria = new MobileLibrary("Almacen1", "Madrid", mobiles);

Libreria.getTotalPrice()

console.log(Libreria);

console.log(Libreria.getTotalPrice());

Libreria.setLocation("Getafe")

console.log(Libreria.getLocation());

console.log(Libreria.getMobiles());

Libreria.getMobiles()[0].print()


Libreria.setTotalPrice(30002)

console.log(Libreria.getTotalPrice());



console.log("\n\n");

Libreria.printLibrary()