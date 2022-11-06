export
const create_test_array = () =>{
        const randomNumberInRange = (min, max) => {
            // 👇️ get number between min (inclusive) and max (inclusive)
            return Math.floor(Math.random() * (max - min + 1)) + min;
            }



        const property = {
            price: 0,
            type: "place",
            numberofrooms:0,
            numberofbeds:0,
            numberofbathrooms:0,
            propertytype:"type",
            images:[],
            location:"location",
            position:{
                lat:0,
                lng:0
            }
            };
              

        const price_array = [];
        const images = [
            [
                require("../images/property/property1/1.webp"),
                require("../images/property/property1/2.webp"),
                require("../images/property/property1/3.webp"),
                require("../images/property/property1/4.webp"),
                require("../images/property/property1/5.webp"),
                require("../images/property/property1/6.webp"),
                require("../images/property/property1/7.webp"),
                require("../images/property/property1/8.webp"),
                require("../images/property/property1/9.webp"),
                require("../images/property/property1/10.webp")    
            ],
            [
                require("../images/property/property2/1.webp"),
                require("../images/property/property2/2.webp"),
                require("../images/property/property2/3.webp"),
                require("../images/property/property2/4.webp"),
                require("../images/property/property2/5.webp"),
                require("../images/property/property2/6.webp"),
                require("../images/property/property2/7.webp"),
                require("../images/property/property2/8.webp"),
                require("../images/property/property2/9.webp"),
                require("../images/property/property2/10.webp")    
            ],
            [
                require("../images/property/property3/1.webp"),
                require("../images/property/property3/2.webp"),
                require("../images/property/property3/3.webp"),
                require("../images/property/property3/4.webp"),
                require("../images/property/property3/5.webp"),
                require("../images/property/property3/6.webp"),
                require("../images/property/property3/7.webp"),
                require("../images/property/property3/8.webp"),
                require("../images/property/property3/9.webp"),
                require("../images/property/property3/10.webp")    
            ],
            [
                require("../images/property/property4/1.webp"),
                require("../images/property/property4/2.webp"),
                require("../images/property/property4/3.webp"),
                require("../images/property/property4/4.webp"),
                require("../images/property/property4/5.webp"),
                require("../images/property/property4/6.webp"),
                require("../images/property/property4/7.webp"),
                require("../images/property/property4/8.webp"),
                require("../images/property/property4/9.webp"),
                require("../images/property/property4/10.webp")    
            ]
        ]
        const types = ["entire place", "private room", "shared room"];
        const proptypes = ["house", "flat", "hotel", "guesthouse"];
        const locations = ["Ankara", "Istanbul", "Konya", "Antalya","Yozgat","Mugla",
                            "Bolu", "Edirne", "Manisa", "Denizli", "Amasya"
                            ]
        const n = 35
        const s = 50
        const e = 50
        const w = 10



        for(var i=0; i<500; i++)
        {
            let price = randomNumberInRange(9,90);
            let type = types[randomNumberInRange(0,2)]
            let numberofrooms = randomNumberInRange(1,8)
            let numberofbeds = randomNumberInRange(1,8)
            let numberofbathrooms = randomNumberInRange(1,8)
            let propertytype = proptypes[randomNumberInRange(0,3)]
            let imgs = images[randomNumberInRange(0,3)]
            let location = locations[randomNumberInRange(0,10)]
            let position = {lat: randomNumberInRange(n,s), lng: randomNumberInRange(e,w) }

            const pro = Object.create(property);
            pro.price= price;
            pro.type=type;
            pro.numberofrooms=numberofrooms;
            pro.numberofbeds=numberofbeds;
            pro.numberofbathrooms=numberofbathrooms;
            pro.propertytype = propertytype;
            pro.images=imgs;
            pro.location=location;
            pro.position=position;
            price_array.push(pro); 
        }
        for(var i=0; i<100; i++)
        {
            let price = randomNumberInRange(90,140);
            let type = types[randomNumberInRange(0,2)]
            let numberofrooms = randomNumberInRange(1,8)
            let numberofbeds = randomNumberInRange(1,8)
            let numberofbathrooms = randomNumberInRange(1,8)
            let propertytype = proptypes[randomNumberInRange(0,3)]
            let imgs = images[randomNumberInRange(0,3)]
            let location = locations[randomNumberInRange(0,10)]
            let position = {lat: randomNumberInRange(n,s), lng: randomNumberInRange(e,w) }


            const pro = Object.create(property);
            pro.price= price;
            pro.type=type;
            pro.numberofrooms=numberofrooms;
            pro.numberofbeds=numberofbeds;
            pro.numberofbathrooms=numberofbathrooms;
            pro.propertytype = propertytype;
            pro.images=imgs
            pro.location=location;
            pro.position=position;
            price_array.push(pro); 
        }
        for(var i=0; i<20; i++)
        {
            let price = randomNumberInRange(200,800);
            let type = types[randomNumberInRange(0,2)]
            let numberofrooms = randomNumberInRange(1,8)
            let numberofbeds = randomNumberInRange(1,8)
            let numberofbathrooms = randomNumberInRange(1,8)
            let propertytype = proptypes[randomNumberInRange(0,3)]
            let imgs = images[randomNumberInRange(0,3)]
            let location = locations[randomNumberInRange(0,10)]
            let position = {lat: randomNumberInRange(n,s), lng: randomNumberInRange(e,w) }

            const pro = Object.create(property);
            pro.price= price;
            pro.type=type;
            pro.numberofrooms=numberofrooms;
            pro.numberofbeds=numberofbeds;
            pro.numberofbathrooms=numberofbathrooms;
            pro.propertytype = propertytype;
            pro.images=imgs
            pro.location=location;
            pro.position=position;
            price_array.push(pro); 
            }

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

