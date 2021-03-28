import { Chore } from './chore';
import { Contributor } from './contributor';

export class ChoreEvent {
  Completed: Date;
  Chore: Chore;
  Contributor: Contributor;

    public static CreateFromDTO(data: any) {
        let choreEvent = new ChoreEvent();
        choreEvent.Completed = data.Completed;
        choreEvent.Chore = Chore.CreateFromDTO(data.Chore);
        choreEvent.Contributor = Contributor.CreateFromDTO(data.Contributor);
        return choreEvent;
    }
}
