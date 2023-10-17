import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
            background-color: green;
        }
        .offline {
            background-color: red;
        }
    `]
})
export class ServerComponent {
    serverId = 10;
    isServerOnline = Math.random() > 0.5 ? true : false;
    serverStatus = this.isServerOnline ? "online" : "offline"
    getServerStatus() {
        return this.serverStatus;
    }
}