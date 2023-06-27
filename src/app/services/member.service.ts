import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  baseUrl: string = environment.baseUrl;
  members: Member[] = [];
  member: Member | undefined;
  constructor(private http: HttpClient) {}

  getMembers() {
    if (this.members.length > 0) {
      return of(this.members);
    }
    return this.http
      .get<Member[]>(this.baseUrl + 'users')
      .pipe(map((memberList) => (this.members = memberList)));
  }

  getMemberById(id: number) {
    const member = this.members.find((a) => a.id === id);
    if (member) {
      return of(member);
    }
    return this.http.get<Member>(this.baseUrl + 'users/' + id);
  }

  getMemberByUsername(username: string) {
    const member = this.members.find((a) => a.userName === username);
    if (member) {
      return of(member);
    }
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }

  updateMember(member: Member) {
    return this.http.put(this.baseUrl + 'users', member).pipe(
      map(() => {
        const index = this.members.indexOf(member);
        this.members[index] = { ...this.members[index], ...this.member };
      })
    );
  }

  setMainPhoto(photoId: number) {
    return this.http.put(this.baseUrl + 'users/set-main-photo', photoId);
  }

  deletePhoto(photoId: number) {
    return this.http.delete(this.baseUrl + 'users/delete-photo/' + photoId);
  }
}
