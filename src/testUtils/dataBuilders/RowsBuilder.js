import { RowBuilder } from './RowBuilder';

export class RowsBuilder {
  build () {
    const row1 = new RowBuilder().build();
    const row2 = new RowBuilder()
      .withName1('Alfred K. Krogh')
      .withEmail('AlfredKKrogh@armyspy.com')
      .withPerId(2)
      .build();
    const row3 = new RowBuilder()
      .withName1('Silas L. Bertelsen')
      .withEmail('SilasLBertelsen@armyspy.com')
      .withPerId(3)
      .build();
    const row4 = new RowBuilder()
      .withName1('Mia A. Johnsen')
      .withEmail('MiaAJohnsen@dayrep.com')
      .withPerId(4)
      .build();
    const row5 = new RowBuilder()
      .withName1('Alfred S. Schou')
      .withEmail('AlfredSSchou@jourrapide.com')
      .withPerId(5)
      .build();
    return [row1, row2, row3, row4, row5];
  }
}
