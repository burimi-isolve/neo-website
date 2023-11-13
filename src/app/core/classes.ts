import { IProject, IService, ISlide } from "./interfaces";

export class WebSiteClass{
  slides:ISlide[];
  logoImg: string;
  logoImgAlt: string;
  servicesHeadTitle: string;
  servicesHeadDescription: string;
  services: IService[];
  aboutImage: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutImgAlt: string;
  projectHeadTitle: string;
  projectHeadDescription: string;
  projects:IProject[];
  contactPageImage: string;
  facebookPageID: string;
  facebookAPI: string;
  instagramAPI: string;
  trackingLocation: string;
  trackingID: string;
  twitter: string;
  facebook: string;
  instagram: string;
  contactWorkTime: string;
  contactPhone: string;
  contactEmail: string;
  contactAddress: string;
  seoTitle:string;
  seoDescription:string;
seoKeywords: string;
secondBannerImage: string;
firstBannerImage: string;
productHeadImage: string;

  constructor(slides?:ISlide[], logoImg?:string, logoImgAlt?:string, servicesHeadTitle?:string, servicesHeadDescription?:string, services?:IService[],
  aboutImage?: string,
  aboutTitle?: string,
  aboutDescription?: string,
  aboutImgAlt?: string,
  projectHeadTitle?: string,
  projectHeadDescription?: string,
  projects?:IProject[],
  contactPageImage?: string,
  facebookPageID?: string,
  facebookAPI?: string,
  instagramAPI?: string,
  trackingLocation?: "header" | "ga-footer",
  trackingID?: string,
  twitter?: string,
  facebook?:string,
  instagram?:string,
  contactWorkTime?: string,
  contactPhone?: string,
  contactEmail?:string,
  contactAddress?: string,
  seoTitle?:string,
  seoDescription?:string,
seoKeywords?: string,
secondBannerImage?:string,
firstBannerImage?: string,
productHeadImage?:string
  ){

    this.slides = slides || [];
    this.logoImg = logoImg || "";
    this.logoImgAlt = logoImgAlt || "";    
    this.servicesHeadTitle = servicesHeadTitle || "";
    this.servicesHeadDescription = servicesHeadDescription || "";
    this.services = services || [];
    this.aboutImage = aboutImage || "";
    this.aboutTitle= aboutTitle || "";
    this.aboutDescription= aboutDescription || "";
    this.aboutImgAlt= aboutImgAlt || "";
    this.projectHeadTitle= projectHeadTitle || "";
    this.projectHeadDescription= projectHeadDescription || "";
    this.projects = projects || [];
    this.contactPageImage = contactPageImage || "";
    this.facebookPageID = facebookPageID || "";
    this.facebookAPI = facebookAPI || "";
    this.instagramAPI = instagramAPI || "";
    this.trackingLocation = trackingLocation || "header";
    this.trackingID = trackingID || "";
    this.twitter = twitter || "";
    this.facebook = facebook || "";
    this.instagram = instagram || "";
    this.contactWorkTime = contactWorkTime || "";
    this.contactPhone = contactPhone || "";
    this.contactEmail = contactEmail || "";
    this.contactAddress = contactAddress || "";
    this.seoTitle = seoTitle || "";
    this.seoDescription = seoDescription || "";
    this.seoKeywords = seoKeywords || "";
    this.secondBannerImage = secondBannerImage || "";
    this.firstBannerImage = firstBannerImage || "";
    this.productHeadImage = productHeadImage || "";
  }
}

export class SlideClass {
  slideImg: string;
  slideTitle: string;
  slideSubtitle: string;
  slideImgAlt: string;
  slideButton: string;
  slideButtonLink: string;

  constructor(slideImg?: string,
    slideTitle?: string,
    slideSubtitle?: string,
    slideImgAlt?: string,
    slideButton?: string,
    slideButtonLink?: string) {
    this.slideImg = slideImg || "";
    this.slideTitle = slideTitle || "";
    this.slideSubtitle = slideSubtitle || "";
    this.slideImgAlt = slideImgAlt || "";
    this.slideButton = slideButton || "";
    this.slideButtonLink = slideButtonLink || ""
  }
}

export class ServiceClass{
  servicesTitle: string;
  servicesDescription: string;
  servicesImage: string;
  servicesImgAlt: string;
  servicesButton: string;
  servicesButtonLink: string;

  constructor(
    servicesTitle?: string,
    servicesDescription?: string,
    servicesImage?: string,
    servicesImgAlt?: string,
    servicesButton?: string,
    servicesButtonLink?: string
    ) {
    this.servicesTitle = servicesTitle || "";
    this.servicesDescription = servicesDescription || "";
    this.servicesImage = servicesImage || "";
    this.servicesImgAlt = servicesImgAlt || "";
    this.servicesButton = servicesButton || "";
    this.servicesButtonLink = servicesButtonLink || ""
  }
}

export class ProjectClass{
  projectsTitle: string;
  projectsDescription: string;
  projectsImage: string;
  projectsImgAlt: string;
  projectsButton: string;
  projectsButtonLink: string;

  constructor(
    projectsTitle?: string,
    projectsDescription?: string,
    projectsImage?: string,
    projectsImgAlt?: string,
    projectsButton?: string,
    projectsButtonLink?: string
    ) {
    this.projectsTitle = projectsTitle || "";
    this.projectsDescription = projectsDescription || "";
    this.projectsImage = projectsImage || "";
    this.projectsImgAlt = projectsImgAlt || "";
    this.projectsButton = projectsButton || "";
    this.projectsButtonLink = projectsButtonLink || ""
  }
}