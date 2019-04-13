import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  it('should sign in the thisuser', ()=>{
    const service: LoginService = TestBed.get(LoginService);
    service.signInUser('thisuser', 'thisuser')
    expect(sessionStorage.getItem('loggedUser')).toBe('thisuser');
    expect(sessionStorage.getItem('friendUser')).toBe('thatuser');
  })
});
