import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RouterMockService {
  constructor() {}

  navigate(x: any) {
    return;
  }
}
