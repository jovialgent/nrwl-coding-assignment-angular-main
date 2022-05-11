import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BackendService } from "./backend.service";
import { StoreService } from "./store/store.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  tickets = this.backend.tickets();
  users = this.backend.users();
  

  constructor(
    private backend: BackendService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.storeService.init();
    
  }
}
