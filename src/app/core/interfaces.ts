export interface IWebSite {
  slides: ISlide[];
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
  projects: IProject[];
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
secondBannerImage?:string,
firstBannerImage?: string,
productHeadImage?:string
}

export interface ISlide {
  slideImg: string;
  slideTitle: string;
  slideSubtitle: string;
  slideImgAlt: string;
  slideButton: string;
  slideButtonLink: string;

}

export interface IService {
  servicesTitle: string;
  servicesDescription: string;
  servicesImage: string;
  servicesImgAlt: string;
  servicesButton: string;
  servicesButtonLink: string;
}

export interface IProject{
  projectsTitle: string;
  projectsDescription: string;
  projectsImage: string;
  projectsImgAlt: string;
  projectsButton: string;
  projectsButtonLink: string;
}
