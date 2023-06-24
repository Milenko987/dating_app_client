import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getMembers() {
    return this.http.get<Member[]>(this.baseUrl + 'users');
  }

  getMemberById(id: number) {
    return this.http.get<Member>(this.baseUrl + 'users/' + id);
  }

  getMemberByUsername(username: string) {
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }
}
