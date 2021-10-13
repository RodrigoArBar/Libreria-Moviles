import { Mobile } from "./mobile2";

export class MobileLibrary
{
    private name: string;
    private location: string;
    private mobiles: Mobile[];
    private totalPrice: number;

    constructor(name: string, location: string, mobiles: Mobile[])
    {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;

    }



    public getName():string
    {
        return this.name;
    }

    public setName(newName:string)
    {
        this.name = newName;
    }

    public getLocation():string
    {
        return this.location;
    }

    public setLocation(newLocation:string)
    {
        this.location = newLocation;
    }

    public getMobiles():Mobile[]
    {
        return this.mobiles;
    }

    public setMobiles(newMobiles:Mobile[])
    {
        this.mobiles = newMobiles;
    }

    public getTotalPrice():number
    {
        return this.totalPrice;
    }

    public setTotalPrice(newTotalPrice:number)
    {
        this.totalPrice = newTotalPrice;
    }

    public totalPriceCalculator():number
    {
        let totalPrice : number = 0;

        for(let i:number = 0; i < this.mobiles.length; i++)
        {
            totalPrice += this.mobiles[i].getPrice()

        }


        return totalPrice;
    }
}