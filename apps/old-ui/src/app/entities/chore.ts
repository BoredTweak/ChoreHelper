export class Chore {
  Name: string;
  Id: number;
  FrequencyDays: number;

  public static CreateFromDTO(data: any): Chore {
    if (data == null)
    {
      return null;
    }

    let chore = new Chore();
    chore.Name = data.Name;
    chore.Id = data.Id;
    chore.FrequencyDays = data.FrequencyDays;
    return chore;
  }
}
