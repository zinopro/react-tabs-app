export interface User {
    id?: string;
    username: string;
    phone: string;
    loading: boolean;
  }
  
  export interface State {
    users: User[];
  }
