import { Component } from '@angular/core';
import { IWebSite, ISlide } from '../core/interfaces';
import { ProjectClass, ServiceClass, SlideClass, WebSiteClass } from '../core/classes';

@Component({
  selector: 'app-site-settings',
  templateUrl: './site-settings.component.html',
  styleUrls: ['./site-settings.component.scss']
})
export class SiteSettingsComponent {

  webSite: IWebSite = new WebSiteClass();
  products = [];

generateBase64Img($event:any):Promise<string>{
  return new Promise((resolve, reject) => {
    const file = $event.target.files[0];
    
    if (!file) {
      reject("No file selected");
    }

    const reader = new FileReader();

    reader.onload = () => {
      const base64String: string = reader.result as string;
      resolve(base64String);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
}

// Example usage
// Simulating a File input change event (replace this with the actual event from the file input)

changingSlideImg($event:any,index:number){
  this.generateBase64Img($event)
  .then((base64String) => {
   this.webSite.slides[index].slideImg = base64String
  })
  .catch((error) => {
    console.error("Error converting to base64:", error);
  });
}
changingServiceImg($event:any,index:number){
  this.generateBase64Img($event)
  .then((base64String) => {
   this.webSite.services[index].servicesImage = base64String
  })
  .catch((error) => {
    console.error("Error converting to base64:", error);
  });
}
changingLogoImg($event:any){
  this.generateBase64Img($event)
  .then((base64String) => {
   this.webSite.logoImg = base64String
  })
  .catch((error) => {
    console.error("Error converting to base64:", error);
  });
}
changingAboutImg($event:any){
  this.generateBase64Img($event)
  .then((base64String) => {
   this.webSite.aboutImage = base64String
  })
  .catch((error) => {
    console.error("Error converting to base64:", error);
  });
}
changingContactPageImage($event:any){
  this.generateBase64Img($event)
  .then((base64String) => {
   this.webSite.contactPageImage = base64String
  })
  .catch((error) => {
    console.error("Error converting to base64:", error);
  });
}
changingSecondBannerImage($event:any){
  this.generateBase64Img($event)
  .then((base64String) => {
   this.webSite.secondBannerImage = base64String
  })
  .catch((error) => {
    console.error("Error converting to base64:", error);
  });
}
changingfirstBannerImage($event:any){
  this.generateBase64Img($event)
  .then((base64String) => {
   this.webSite.firstBannerImage = base64String
  })
  .catch((error) => {
    console.error("Error converting to base64:", error);
  });
}
changingProductHeadImg($event:any){
  this.generateBase64Img($event)
  .then((base64String) => {
   this.webSite.productHeadImage = base64String
  })
  .catch((error) => {
    console.error("Error converting to base64:", error);
  });

}

addSlide(){
  this.webSite.slides.push(new SlideClass())
}
addService(){
  this.webSite.services.push(new ServiceClass())
}
addProject(){
  this.webSite.projects.push(new ProjectClass())
}
removeService(index:number){
  this.webSite.services.splice(index,1)
}

moveElement(element: keyof IWebSite, indexElement:number, direction:"up"|"down"){
  const elementToMove = this.webSite[element]?.[indexElement];
    (this.webSite[element] as Array<any>).splice(indexElement,1);
    (this.webSite[element] as Array<any>).splice(indexElement + (direction === "up" ? -1 : 1),0,elementToMove);
  }

removeElement(element: keyof IWebSite,index: number){
  (this.webSite[element] as Array<any>).splice(index,1);
}

}
