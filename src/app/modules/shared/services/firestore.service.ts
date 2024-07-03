import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private usuariosCollection: AngularFirestoreCollection<Usuario>


  constructor(private database: AngularFirestore) {
    this.usuariosCollection = database.collection<Usuario>("usuarios")
  }


}