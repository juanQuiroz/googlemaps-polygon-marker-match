import Base from './base';
import ChinchaData from '../../../api/chincha.json';

const sucursalId = 3;

class ChinchaEntity extends Base{
  constructor(){
    super();
    this.sucursalID = sucursalId;
  }
}

const chincha = new ChinchaEntity();
