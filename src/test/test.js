export
const create_test_array = () =>{
        const randomNumberInRange = (min, max) => {
            // 👇️ get number between min (inclusive) and max (inclusive)
            return Math.floor(Math.random() * (max - min + 1)) + min;
            }

        // const property = (price, type, numberofrooms,numberofbeds, numberofbathrooms) => {
        //     this.price = price;
        //     this.type = type;
        //     this.numberofrooms = numberofrooms;
        //     this.numberofbeds = numberofbeds;
        //     this.numberofbathrooms = numberofbathrooms;
        //     }

            const property = {
                price: 0,
                type: "place",
                numberofrooms:0,
                numberofbeds:0,
                numberofbathrooms:0
                };
              

        const price_array = [];

        for(var i=0; i<500; i++)
        {
            const types = ["entire place", "private room", "shared room"]
            let price = randomNumberInRange(9,90);
            let type = types[randomNumberInRange(0,2)]
            let numberofrooms = randomNumberInRange(1,8)
            let numberofbeds = randomNumberInRange(1,8)
            let numberofbathrooms = randomNumberInRange(1,8)

            const pro = Object.create(property);
            pro.price= price;
            pro.type=type;
            pro.numberofrooms=numberofrooms;
            pro.numberofbeds=numberofbeds;
            pro.numberofbathrooms=numberofbathrooms;
            console.log(typeof(pro), pro)

            price_array.push(pro); 
        }
        for(var i=0; i<100; i++)
        {
            const types = ["entire place", "private room", "shared room"]
            let price = randomNumberInRange(90,140);
            let type = types[randomNumberInRange(0,2)]
            let numberofrooms = randomNumberInRange(1,8)
            let numberofbeds = randomNumberInRange(1,8)
            let numberofbathrooms = randomNumberInRange(1,8)

            const pro = Object.create(property);
            pro.price= price;
            pro.type=type;
            pro.numberofrooms=numberofrooms;
            pro.numberofbeds=numberofbeds;
            pro.numberofbathrooms=numberofbathrooms;

            price_array.push(pro); 
        }
        for(var i=0; i<20; i++)
        {
            const types = ["entire place", "private room", "shared room"]
            let price = randomNumberInRange(200,800);
            let type = types[randomNumberInRange(0,2)]
            let numberofrooms = randomNumberInRange(1,8)
            let numberofbeds = randomNumberInRange(1,8)
            let numberofbathrooms = randomNumberInRange(1,8)

            const pro = Object.create(property);
            pro.price= price;
            pro.type=type;
            pro.numberofrooms=numberofrooms;
            pro.numberofbeds=numberofbeds;
            pro.numberofbathrooms=numberofbathrooms;
            console.log(typeof(pro), pro)

            price_array.push(pro); 
            }
        console.log(price_array)

    return price_array;
} 

export 
const calc_price_repetition = (array) => {

        let repetition_array = [];


        for(var i=0; i<50; i++)
        {
            const min_price = array.reduce((previous, current) => {
                return current.price < previous.price ? current : previous;
              }).price;
            
            const max_price = array.reduce((previous, current) => {
            return current.price > previous.price ? current : previous;
            }).price;

            var range_start = 
                    // Math.min(...array)+(Math.max(...array)-Math.min(...array))/50*i;
                    min_price + (max_price-min_price)/50*i;

            var range_end = 
                            // (Math.max(...array)-Math.min(...array))/50*(i+1);
                            (max_price-min_price)/50*(i+1);

            
            let how_many = 0;

            array.forEach(element => {
                if(element.price>range_start && element.price<=range_end )
                {how_many++}
            });
            repetition_array.push(how_many)                       
        }
        return repetition_array; 
}



// export const prices = create_test_array();
export const test = create_test_array();

let average = 0;
test.forEach((price)=>{
        average=average+price.price
})

export let numOfproperties = test.length;

export const av = Math.floor(average/test.length);

export const repetition_array = calc_price_repetition(test);

export const min = test.reduce((previous, current) => {
    return current.price < previous.price ? current : previous;
  }).price;
export const max = test.reduce((previous, current) => {
    return current.price > previous.price ? current : previous;
    }).price;

