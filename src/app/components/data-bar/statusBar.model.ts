export interface StatusBarModel {
  title: string;
  iconClass?: string;
  status?: string;
  iconClasses?: MultiClassModel;
}

export interface MultiClassModel {
  iconClass: string;
  status: string;
}

export interface EmployeeDataModel {
  name: string;
  age: number;
  favLang: string;
}
