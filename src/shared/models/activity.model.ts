export class Activity {
  title: string;
  description?: string;
  duedate?: Date;
  duetime?: Date;
  complete: boolean;

  constructor(title, description, duedate, duetime, complete = false){}
}
