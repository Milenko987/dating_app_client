import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css'],
})
export class MembersListComponent implements OnInit {
  memebersList: Member[] = [];

  constructor(private memberService: MemberService) {}
  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this.memberService.getMembers().subscribe({
      next: (memberList) => (this.memebersList = memberList),
    });
  }
}
