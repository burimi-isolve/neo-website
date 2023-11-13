import { Component, Input } from '@angular/core';
import { IWebSite } from '../core/interfaces';
import { WebSiteClass } from '../core/classes';

@Component({
  selector: 'app-site-preview',
  templateUrl: './site-preview.component.html',
  styleUrls: ['./site-preview.component.scss']
})
export class SitePreviewComponent {

  @Input() webSite:IWebSite = new WebSiteClass();

  goTo(link:string){
    window.open(link, "_blank")
  }

}
