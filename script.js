/**
 * Created by vitalik on 05.06.17.
 */


var departure = [3, 1];
var destination = [8, 6];


function perfectCity(a,b) {
    var vm = this;

    vm.first = a;
    vm.second = b;
    vm.sum = 0;

    if ((intchar(first[0]) == intchar(second[0])) && (intchar(first[1]) == intchar(second[1]))){

        sum = sum + (Math.abs(first[0]-second[0])) + (Math.abs(first[1]-second[1]));

        if (sum > 2) {
            sum = 4 - sum;
        }
    }else if( intchar(first[1])== intchar(second[1])){
         sum = sum + Math.abs(first[0]-second[0]);
       if( Math.abs(Math.abs(intchar(first[1])*2) - second[1] - first[1]) > 1 ){

           sum = sum + (2- Math.abs((Math.abs(intchar(first[1])*2) - second[1] - first[1])));
       }else {
           sum = sum + Math.abs(Math.abs(intchar(first[1])*2) - second[1] - first[1]);

       }
   }else if( intchar(first[0]) == intchar(second[0])){
        sum = sum + Math.abs(first[1]-second[1]);

        if( Math.abs(Math.abs(intchar(first[0])*2) - second[0] - first[0]) > 1 ){

            sum = sum + (2- Math.abs((Math.abs(intchar(first[0])*2) - second[0] - first[0])));

        }else {
            sum = sum + Math.abs(Math.abs(intchar(first[0])*2) - second[0] - first[0]);

        }

   }
   else{
       sum = sum + (Math.abs(first[0]-second[0])) + (Math.abs(first[1]-second[1]))

   }

   function intchar(z){
        return  z  - (z%1);
    }

        return sum.toFixed(1);
}



console.log(perfectCity(departure,destination));