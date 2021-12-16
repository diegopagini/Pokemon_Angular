export interface Pokemon {
  id: string;
  pic: string;
  name: string;
  inTeam?: boolean;
}

export interface ServiceResponse {
  count: number;
  next: null;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
