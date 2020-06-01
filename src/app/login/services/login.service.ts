import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {
  }

  onLogin(user) {
    const response = {
      responseCode: '200',
      body: {
        user: {
          username: user.username,
          password: user.password,
          roles: user.username === 'giangdv3' ? ['ADMIN'] : ['USER']
        }
      }
    };

    return new BehaviorSubject<any>(response);
  }
}
