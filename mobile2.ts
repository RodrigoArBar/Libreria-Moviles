export class Mobile
{
    private name: string;
    private model: string;
    private trademark: string;
    private sdSize: number;
    private color: string;
    private is5G: boolean;
    private cameraNumber: number;
    private price: number;

    constructor()
    {

    }

    public getName():string
    {
        return this.name;
    }

    public setName(newName:string)
    {
        this.name = newName;
    }

    public getModel():string
    {
        return this.model;
    }

    public setModel(newModel:string)
    {
        this.model = newModel;
    }

    public getTrademark():string
    {
        return this.trademark;
    }

    public setTrademark(newTrademark:string)
    {
        this.trademark = newTrademark;
    }

    public getSdSize():number
    {
        return this.sdSize;
    }

    public setSdSize(newSdSize:number)
    {
        this.sdSize = newSdSize;
    }

    public getColor():string
    {
        return this.color;
    }

    public setColor(newColor:string)
    {
        this.color = newColor;
    }

    public getIs5G():boolean
    {
        return this.is5G;
    }

    public setIs5G(newIs5G:boolean)
    {
        this.is5G = newIs5G;
    }

    public getCameraNumber():number
    {
        return this.cameraNumber;
    }

    public setCameraNumber(newCameraNumber:number)
    {
        this.cameraNumber = newCameraNumber;
    }

    public getPrice():number
    {
        return this.price;
    }

    public setPrice(newPrice:number)
    {
        this.price = newPrice;
    }


    public print()
    {
        console.log("The caracteristics of the mobile "+ this.name+" are: ");
        console.log("\n · Name: "+ this.name);
        console.log("\n · Model: "+ this.model);
        console.log("\n · Trademark: "+ this.trademark);
        console.log("\n · SD Size(GB): "+ this.sdSize);
        console.log("\n · Color: "+ this.color);
        console.log("\n · is5G?: "+ this.color);
        console.log("\n · Number of Cameras: "+ this.cameraNumber);
        
        
        
    }



}





