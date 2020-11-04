import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'addDelRow';

  row = [
    {
      title: "",
      team_member: ""
    },
    {
      title: "",
      team_member: ""
    },
    {
      title: "",
      team_member: ""
    },
    {
      title: "",
      team_member: ""
    }
  ];

  addTable() {
    const obj = {
      title: "",
      team_member: ""
    };
    this.row.push(obj);
  }

  deleteRow(x) {
    var delBtn = confirm(" Do you want to delete ?");
    if (delBtn == true) {
      this.row.splice(x, 1);
    }
  }
}
