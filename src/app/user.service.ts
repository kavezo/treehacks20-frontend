import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  async start() {
    return new Promise((resolve, reject) => {
      const sub = this.afAuth.user.subscribe(user => {
        console.log(user)
        if (user){
          this.router.navigate(['login']);
        } else {
          this.router.navigate(['login']);
        }
        sub.unsubscribe();
      })
    })
    this.afAuth.user.subscribe(user => {
      console.log(user);
    })
    const user = await this.afAuth.user.toPromise();
    console.log(user);
    
    // AFAuth to check if logged in or not
    // if not logged in, reroute to login
    // need to return promise
  }
}
