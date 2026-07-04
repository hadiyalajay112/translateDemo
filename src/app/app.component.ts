import { Component, inject, OnInit } from "@angular/core";
import { IonApp, IonRouterOutlet } from "@ionic/angular/standalone";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  private translateService = inject(TranslateService);

  constructor() {
    this.translateService.use("en");
  }

  ngOnInit(){}
}
