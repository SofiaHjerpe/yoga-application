export interface IRoute {
  id: number;
  name: string;
  path: string;
}
export interface ICategories {
  id: number;
  category_name: string;
  category_description: string;
  poses: IPoses[];

}
export interface IPoses {
  id: number;
  english_name: string;
  sanskrit_name_adapted: string;
  translation_name: string;
  pose_description: string;
  pose_benefits: string;
  url_svg: string; 
  url_png: string;
}