export
const create_test_array = () =>{
        const randomNumberInRange = (min, max) => {
            // 👇️ get number between min (inclusive) and max (inclusive)
            return Math.floor(Math.random() * (max - min + 1)) + min;
            }
        const price_array = [];

        for(var i=0; i<500; i++)
        {
            price_array.push(randomNumberInRange(9,90)); 
        }
        for(var i=0; i<100; i++)
        {
            price_array.push(randomNumberInRange(90,140)); 
        }
        for(var i=0; i<20; i++)
        {
            price_array.push(randomNumberInRange(200,800)); 
        }
        console.log(price_array)

    return price_array;
} 

export 
const calc_price_repetition = (array) => {

        let repetition_array = [];
        for(var i=0; i<50; i++)
        {
            var range_start = 
                    Math.min(...array)+(Math.max(...array)-Math.min(...array))/50*i;

            var range_end = (Math.max(...array)-Math.min(...array))/50*(i+1);
            
            let how_many = 0;

            array.forEach(element => {
                if(element>range_start && element<=range_end )
                {how_many++}
            });
            repetition_array.push(how_many)                       
        }
        return repetition_array; 
}



// export const prices = create_test_array();
const test = create_test_array()

let average = 0;
test.forEach((price)=>{
        average=average+price
})

export const av = Math.floor(average/test.length);

export const repetition_array = calc_price_repetition(test);

export const min = Math.min(...test);
export const max = Math.max(...test);

