import { Component, inject, OnInit } from "@angular/core";
import {
  IonContent,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/angular/standalone";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { CommonDataService } from "../core/services/common-data-service/common-data-service";

@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"],
  imports: [
    IonContent,
    IonList,
    IonItem,
    IonSelect,
    IonSelectOption,
    TranslatePipe,
  ],
})
export class FolderPage implements OnInit {
  currentLan: string = "en";
  countriesList: any[] = [];
  private translateService = inject(TranslateService);
  private commonDataService = inject(CommonDataService);

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.countriesList = this.commonDataService.getCountries();
  }

  changeLan(event: any) {
    this.currentLan = event.detail.value;
    this.translateService.use(this.currentLan);
  }

  slugify(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_|_$/g, "");
  }
}
