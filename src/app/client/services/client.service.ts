import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private db: AngularFirestore) { }

  private clientCollectionName = 'clients';

  getClients(): Observable<firebase.firestore.QuerySnapshot> {
    return this.db.collection<Client>(this.clientCollectionName, ref => ref.orderBy('created_at', 'desc')).get();
  }

  saveClient(client: Client): Promise<DocumentReference> {
    return this.db.collection(this.clientCollectionName).add(client);
  }

}
