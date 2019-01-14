export class Quote {
 public showDescription: boolean;
  approval: any;
  disapproval: any;
  constructor(public id: number, public name: string, public description: string, public post: string,
  public upvotes: number, public downvotes: number, public completeDate: Date) {
      this.showDescription = false;
}
}
