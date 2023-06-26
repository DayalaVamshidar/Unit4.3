import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  response: any = [];
  constructor(private apiService: ApiService, private routes: Router) {}

  ngOnInit(): void {}

  addDetails(body: any) {
    this.response = this.apiService.addData(body).subscribe((response: any) => {
      this.response = response?.response;
    });
  }
  Add(
    title: string,
    description: string,
    published_date: string,
    author: string,
    status: string
  ) {
    const body = {
      title: title,
      description: description,
      published_date: published_date,
      author: author,
      status: status,
    };
    this.addDetails(body);
    this.homePage();
  }
  homePage() {
    this.routes.navigate(['/home']);
  }
}
