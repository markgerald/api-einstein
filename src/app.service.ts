import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUniqueArray(arrArg) {
    return arrArg.filter(function(elem, pos,arr) {
      return arr.indexOf(elem) == pos;
    });
  };
}
