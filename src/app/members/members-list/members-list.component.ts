import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css'],
})
export class MembersListComponent implements OnInit {
  memebersList$: Observable<Member[]> | undefined;

  constructor(private memberService: MemberService) {}
  ngOnInit(): void {
    this.memebersList$ = this.memberService.getMembers();
  }
}
