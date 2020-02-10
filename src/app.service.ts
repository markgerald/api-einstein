import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
    getUniqueArray(arrArg) {
        return arrArg.filter(function (elem, pos, arr) {
            return arr.indexOf(elem) == pos;
        });
    };

    getSum(array, sum) {
        const hashMap = {};
        const results = [];
        for (let i = 0; i < array.length; i++) {
            if (hashMap[array[i]]) {
                results.push([hashMap[array[i]], array[i]])
            } else {
                hashMap[sum - array[i]] = array[i];
            }
        }
        return results;
    }

    getTwoArrayUniqueSum(requestBody) {
      return (this.getSum(this.getUniqueArray(requestBody.A), requestBody.K).length > 0)? 'Yes' : 'No';
    }
}
