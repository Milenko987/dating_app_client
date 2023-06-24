import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  NgxGalleryAnimation,
  NgxGalleryImage,
  NgxGalleryOptions,
} from '@kolkov/ngx-gallery';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
})
export class MemberDetailComponent implements OnInit {
  member: Member | undefined;
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
      },
    ];
    this.loadMember();
  }

  loadMember() {
    const username = this.route.snapshot.paramMap.get('username');
    if (!username) {
      return;
    }
    this.memberService.getMemberByUsername(username).subscribe({
      next: (member) => {
        this.member = member;
        console.log(member);
        this.galleryImages = this.getImageUrls();
      },
    });
  }

  getImageUrls() {
    if (!this.member) return [];
    const imageUrls = [];
    for (let i = 0; i < this.member.photos.length; i++) {
      imageUrls.push({
        small: this.member.photos[0].url,
        medium: this.member.photos[0].url,
        big: this.member.photos[0].url,
      });
    }
    return imageUrls;
  }
}
