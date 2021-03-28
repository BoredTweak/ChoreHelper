export class Contributor {
  Name: string;
  Id: number;

  public static CreateFromDTO(data: any): Contributor {
    if (data == null)
    {
      return null;
    }

    let chore = new Contributor();
    chore.Name = data.Name;
    chore.Id = data.Id;
    return chore;
  }
}
