import Base from './base';
import CaneteData from '../../../api/canete.json';

const sucursalId = 1;

class CaneteEntity extends Base{
  constructor(){
    super();
    this.sucursalId = sucursalId;
  }
}

const chincha = new CaneteEntity();
