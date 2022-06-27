import Base from './base';
import IcaData from '../../../api/ica.json';

const sucursalId = 2;

class IcaEntity extends Base{
  constructor(){
    super();
    this.sucursalId = sucursalId;
  }
}

const chincha = new IcaEntity();
