import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  
  allowNewServer = false;

  serverCreationStatus = 'No server was created!';

  serverName: string = "";

  isServerCreated = false;

  servers = ["Test Server"]
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void { }

  onServerCreated(){
    this.isServerCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
