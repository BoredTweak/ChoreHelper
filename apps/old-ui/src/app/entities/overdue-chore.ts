import { Chore } from './chore';
import { Contributor } from './contributor';

export class OverdueChore {
  Chore: Chore 
  Contributor: Contributor;
  EventDate: Date;
  ExpectedEventDate: Date;
  OverdueDays: number;

  public static CreateFromDTO(data: any): OverdueChore {
    if (data == null)
    {
      return null;
    }

    let chore = new OverdueChore();
    chore.Chore = Chore.CreateFromDTO(data);
    chore.Contributor = Contributor.CreateFromDTO(data);
    chore.EventDate = data.EventDate;
    chore.ExpectedEventDate = data.ExpectedEventDate;
    chore.OverdueDays = data.OverdueDays;

    return chore;
  }
}
