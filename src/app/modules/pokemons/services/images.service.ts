import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { DocumentData } from 'rxfire/firestore/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  images$: Observable<DocumentData[]>;

  constructor(private firestore: Firestore) {
    const images = collection(firestore, 'img');
    this.images$ = collectionData(images);
  }

  saveImg(img: string) {
    //TODO: save img
  }
}
